import { useEffect, useState } from 'react';
import { client } from '../lib/sanity';

export function useSanity<T>(query: string): { data: T | null; loading: boolean; error: any } {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await client.fetch(query);
        setData(result);
      } catch (err) {
        setError(err);
        console.error('Sanity fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);

  return { data, loading, error };
}
