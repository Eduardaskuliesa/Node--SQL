const SELECT = `
SELECT 
  b.id, 
  b.cut, 
  JSON_OBJECT('country', f.country, 'name', f.name) as farm,
  b.price, 
  b.rating, 
  IF(COUNT(i.id) = 0, JSON_ARRAY(), JSON_ARRAYAGG(i.src)) as images
FROM beefs as b
LEFT JOIN images as i
ON i.beefId = b.id
LEFT JOIN  farms as f
ON b.farmId = l.id`;

const GROUP = 'GROUP BY b.id;';

const SQL = {
  SELECT,
  GROUP,
} as const;

export default SQL;
