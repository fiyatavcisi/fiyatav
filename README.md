# 📊 Fiyat Avcısı

- Frontend: Netlify
- Backend: Netlify Functions (serverless Node.js)
- Database: MongoDB Atlas

## Kurulum

1. MongoDB Atlas hesabı aç → Database oluştur → Connection string al
2. Netlify hesabı aç → GitHub reposunu bağla
3. Netlify → "Site settings" → "Environment Variables" kısmına şu key ekle:
   - `MONGODB_URI` = atlas connection string
4. `git push` yaptığında otomatik build olacak.
