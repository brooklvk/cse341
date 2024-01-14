
const name = (req, res, next) => {
    res.json('Rusty the dog');
};

const name2 = (req, res, next) => {
    res.json('Roxie the dog');
}

module.exports = { name, name2 };