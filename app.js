var state = {
    items: []
};

var addItem = function(state, item) {
    state.items.push(item);
};

var renderList = function(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li><span class="shopping-item">' + item + '</span>\
        <div class="shopping-item-controls">\
        <button class="shopping-item-toggle">\
        <span class="button-label">check</span>\
        </button><button class="shopping-item-delete">\
        <span class="button-label">delete</span></button>\
        </div></li>';
    });
    element.html(itemsHTML);
};

var renderCheck = function(state, element){
	element.toggleClass("shopping-item__checked");

};

var renderDelete = function(state, element){
	element.remove();

};

$(document).ready(function(){
	$("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    addItem(state, $('#shopping-list-entry').val());
    renderList(state, $('.shopping-list'));
   	$('.shopping-item-toggle').click(function(event){
	event.preventDefault();

		renderCheck(state,$(this).closest('li').children('span'));
	})
	$('.shopping-item-delete').click(function(event){
		renderDelete(state,$(this).closest('li'));
	})
})



});
