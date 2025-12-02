import { useCallback } from 'react';
import { useAuth as useAuthContext } from '../contexts/AuthContext';

export default function useAuth() {
  const { token, user, login, logout } = useAuthContext();

  const getAuthHeaders = useCallback(
    (headers = {}) => {
      if (!token) return headers;
      return { ...headers, Authorization: `Bearer ${token}` };
    },
    [token]
  );

  const authFetch = useCallback(
    async (input, init = {}) => {
      const finalHeaders = getAuthHeaders(init.headers || {});
      const res = await fetch(input, { ...init, headers: finalHeaders });
      if (!res.ok) {
        const text = await res.text().catch(() => '');
        const err = new Error(text || res.statusText || 'Request failed');
        err.status = res.status;
        throw err;
      }
      const ct = res.headers.get('content-type') || '';
      return ct.includes('application/json') ? res.json() : res.text();
    },
    [getAuthHeaders]
  );

  return { token, user, login, logout, getAuthHeaders, authFetch };
}