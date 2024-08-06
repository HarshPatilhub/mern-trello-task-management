import crypto from 'crypto';

// Function to hash a password
export const hashPassword = async (password) => {
    return new Promise((resolve, reject) => {
        const salt = crypto.randomBytes(16).toString('hex'); // Generate a random salt
        const iterations = 100000;
        const keyLength = 64;
        const digest = 'sha512';

        crypto.pbkdf2(password, salt, iterations, keyLength, digest, (err, derivedKey) => {
            if (err) reject(err);
            resolve({
                salt,
                hash: derivedKey.toString('hex')
            });
        });
    });
}

// Function to compare a password with a hash
export const comparePassword = async (password, salt, originalHash) => {
    return new Promise((resolve, reject) => {
        const iterations = 100000;
        const keyLength = 64;
        const digest = 'sha512';

        crypto.pbkdf2(password, salt, iterations, keyLength, digest, (err, derivedKey) => {
            if (err) reject(err);
            resolve(derivedKey.toString('hex') === originalHash);
        });
    });
}
