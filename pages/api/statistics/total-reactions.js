import { SupabaseAdmin } from '@/lib/supabase';

export default async function handler(
  req,
  res
) {
  let likeCount = 0;

  const { data } = await SupabaseAdmin.from('reactions').select(
    'like_count'
  );

  data.forEach((item) => {
    likeCount += item.like_count;
  });

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=60, stale-while-revalidate=60'
  );

  return res.status(200).json({
    likeCount
  });
}
