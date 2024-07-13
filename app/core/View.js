class View {
    render(res, fileName, dataProvider = {}, layout = 'layout'){
        res.render(layout, {
            fileName,
            dataProvider
        });
    }
}

module.exports = View;