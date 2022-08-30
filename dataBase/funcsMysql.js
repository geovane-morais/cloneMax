/*
 * aes_decrypt(senha,'cloneMax');
 * aes_encrypt(senha,'cloneMax');
 * mysqldump -h 127.0.0.1 -u root --no-data --database cloneMax > dbCloneMax.sql -p
 */

const cryptoKey = "cloneMax";
module.exports = {cryptoKey};