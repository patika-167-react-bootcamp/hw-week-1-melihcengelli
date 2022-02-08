Array.prototype.includesCI = function (textval) {
    const textvalue = textval.toLowerCase()
    function copy (item) {
        return item.toLowerCase()
    }
    const lowercaseitems = this.map(copy)
    return Array.prototype.includes.call(lowercaseitems,textvalue)
};

// Example array for using includesCI
const examples = ["Elma","Armut","Kiraz"]

//"eLmA" value is returns "True"
console.log(examples.includesCI("eLmA"))