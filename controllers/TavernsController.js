const sql = require('mssql');
const { poolPromise } = require('../data/db');

getAll = async function(req, res) {
    // format request

    let taverns ;

    res.setHeader('Content-Type', 'application/json');

    const pool = await poolPromise;

    try {
        taverns = await pool
            .request()
            //.input('Name', sql.VarChar, req.query.Name)
            //.input('UserId', sql.Int, req.user.Id)
            .query(
                // eslint-disable-next-line quotes
                `select * from taverns`,
            );
        console.log('inside tavernsController - after sql');
        console.log('inside tavernsController - taverns.recordset = ', taverns.recordset);
        taverns = taverns.recordset;
    } catch (e) {
        returnError(res, e, 500);
    }

    return res.json(taverns);
};

module.exports.getAll = getAll;