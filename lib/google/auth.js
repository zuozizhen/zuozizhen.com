import { google } from 'googleapis';

const googleAuth = new google.auth.GoogleAuth({
  credentials: {
    client_email: 'blog-views@tokyo-dream-227513.iam.gserviceaccount.com',
    client_id: '116155377495563062694',
    private_key:
      '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQClFdLtv69241mv\nN9lQK+XzA/GeNF3jX3PWPfgAMouT7OmZ/PI+RUR1tVUoGq+ZWGvdPVqrFSbcg4e0\nVZhUzttBKLYqUNTlQ+rzNpef5yFiwOXEJw0b/mAG5q0J+EvvktAywub8nchXDzbZ\nIM5ee4lrWU+jBnlbwnvajnJGP4q0+l4OTzu/uIaTBV98oE+Kl7lxEfFjMAVvvv5J\nXQGdi/3HT6fBLh8rUoCqPo+FO6qpR57f44e/u39gxLCiODzsDbgFY52Osbs8SS3n\nme5GSZ5cIBe9oMZXFF5pscxmWh5sJtKw0Qs8IPZRLJwed1oBgtx881rWDtySrawn\nFJuZpJrlAgMBAAECggEATy1i752eofZT1uqB42ZSkRYkpfy2xS1MSQaKskmL0URx\nG+aKJtyhA5WXhLcb3n/eqAtbt69a5qt9BDyDZbWayislB7GiEl3bS5A087/urscW\nzFfwfSspUlYDy0LX5M005wu8ro9cfYjyBPyrjfxRQffhbq7VuPFT5tSoMVIbjEW9\nPSosUVVIIsmfZtJYUJPiutM+cB+CdtPeQzrqsoT5dHDy9r8+iiwwBlxA6X4bk4uc\nSYP/nUex8xCxv3TrguNE6+YSUzQxoyuleWK9kqkp+0NpO/2r+ct3BDPr2ZUGk4kf\nQzak1DeY347HNFJmFHdqA4tlIIJuitrEFtqLH8uQVwKBgQDXGucH0uKp3+MOvApD\n0Wu/INBEMNI7ChpQkMfkFIixJCzK5mHrt51GHD4uWEkxP+zvWLKhsCsN+dbEjncv\nwu9ezwfwXvZHA9qsv1l04qYuK4veBuhnj434UeF1xEgxgjJUgM+JROmqNTsN/SMH\nWIrO/y0rl1k7D7mZ3nCKnlrqdwKBgQDEeHi4SuP/PV8cs59K7cmLsrgLr31h1gWF\n+rz/0AbjH2iqVlOi9Ui4At4olPre4LSStkis4F5n4AHqCjH7gD/gaaXTYbGywB2b\n1YXirmkbS/xkjvCAgG/PznMBvlxZF4R52hlg8O3Zm/06ZXw6NBFdoxBvnHjKonD8\nt2Apit5ggwKBgQCQ9Gwj9ZURbPKSB13TfdjiH7a5fTzu1EwPZsGNjdjfpsUYpk/u\njPnLOVUd3hjUu4Nrd5ZJJ3KcJHT6WBcxdGfiuBldfmDwUkSWjQw3nFToYCgNIxKS\nV0cQw/zvY6pS0q4gC/3PP0VHkj+Nmbx1QtGn1IYYDhHvnxUv/5pPj48s2QKBgBcC\nMMkMZDUQ/+GBm6cPv+mvTWR48csSYGU3XwjqWNQiaoSARZ0w8ooyM8g24kZVtG/2\nDv7H6+ZoUnERLpdQhqqGVNgzebcATrdgQySv3jlHJdC0+K9j2zRP7iIHJBN+8JHA\nm/ZBYOl6HibHmcvLKzl3Dkaz4WWBro+5/fX/gFl3AoGAeMluWI9aUcAHVRcyLjjy\nL8UPcn4RMs5mtB1Ygxt9yWzT+VNbVoKLVauVY8/gd6/JLKTS7IleQbO2WJd2unEz\nSoA7NA3VszzR4VRnFrABx6x7iEHz10rrEXCoQ896DAwnwEQN6THwkPJMoXjTweE6\nUxZ487UOg51DJxjc+fODJ40=\n-----END PRIVATE KEY-----\n'
  },
  scopes: [
    'https://www.googleapis.com/auth/analytics.readonly',
    // 'https://www.googleapis.com/auth/youtube.readonly'
  ]
});

export default googleAuth;
