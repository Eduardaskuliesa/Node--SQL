SELECT b.id, b.cut, f.country, f.name, b.price, b.rating, JSON_ARRAYAGG(i.src)
FROM images as i
LEFT JOIN beefs as b
ON i.beefId = b.id
LEFT JOIN  farm as f
ON b.farmId = f.id
GROUP BY f.id;