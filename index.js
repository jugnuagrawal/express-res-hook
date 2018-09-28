module.exports = function (callback) {
    return (req, res, next) => {
        const end = res.end;
        res.end = function (data) {
            if (callback && typeof callback == 'function') {
                data = callback(data);
                if (typeof data === 'object' && !(data instanceof Buffer)) {
                    data = JSON.stringify(data);
                }
            }
            end.call(this, data);
        }
        next();
    }
};