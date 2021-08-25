$(function () {
    $.ajax({
        url: 'http://web.ifichain.com:8080/ette/get_index',
        type: 'get',
        dataType: 'json',
        beforeSend: function (xhr) {
        },
        success: function (data) {
            var obj =data;
            $('#blocks').html(format(obj.block_height));
            $('#transactions').html(format(obj.transactions));
            $('#signers').html(format(obj.signers));
            $('#nodes').html(format(obj.node_machines));
            $('#wallets').html(format(obj.wallets));
            $('#tps').html(format(obj.tps));
        },
        error: function (data) { console.log("error"); }
    });
});
    