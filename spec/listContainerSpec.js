let React = require('react');
let TestUtils = require('react/lib/ReactTestUtils');
let ListContainer = require('../app/components/list/ListContainer');

describe('ListContainer Component', () => {

    let component = TestUtils.renderIntoDocument(<ListContainer />);

    it('renders', () => {
        expect(component).toBeTruthy()
    });

    it('holds an array in state.list', () => {
        let list = component.state.list;
        expect(list).toEqual(jasmine.any(Array));
    });

    it('has exactly one table tag', () => {
        let element = TestUtils.scryRenderedDOMComponentsWithTag(component, 'table');
        expect(element.length).toBe(1);
    });

    describe('on form submit', () => {

        let form = TestUtils.scryRenderedDOMComponentsWithTag(component, 'form');
        let input = React.findDOMNode(component.refs.newItem);

        beforeEach( () => {
            spyOn(component, "addItem");
        });

        it('calls addItem function with a string', () => {
            input.value = "An item";
            TestUtils.Simulate.submit(form[0]);
            expect(component.addItem).toHaveBeenCalled();
            expect(component.addItem).toHaveBeenCalledWith("An item");
            expect(component.addItem.calls.mostRecent().args).toEqual([jasmine.any(String)]);

        });

        it('clears the input box', () => {
            input.value = "An item";
            TestUtils.Simulate.submit(form[0]);
            expect(input.value).toEqual("");
        });

        it('does not accept an empty string', () => {
            input.value = "";
            TestUtils.Simulate.submit(form[0]);
            expect(component.addItem).not.toHaveBeenCalled();
        });

    });

});

