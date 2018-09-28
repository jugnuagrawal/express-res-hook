module.exports = function (callback) {
    return (req, res, next) => {
        const end = res.end;
        res.end = function (data) {
            const complete = (data) => {
                if (typeof data === 'object' && !(data instanceof Buffer)) {
                    data = JSON.stringify(data);
                }
                end.call(this, data);
            };
            if (callback && typeof callback == 'function') {
                callback(data, complete);
            } else {
                complete(data);
            }
        }
        next();
    }
};