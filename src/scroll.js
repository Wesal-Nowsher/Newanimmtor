import React, { Component } from "react";
import { ScrollTo, ScrollArea } from "react-scroll-to";

export default class MyComponent extends Component {
    render() {
        return (
            <ScrollTo>
                {({ scroll }) => (
                    <div>
                        <ScrollArea id="foo" style={{ height: 1000 }}>
                            <button onClick={() => scroll({ id: "foo", y: 500 })}>
                                Scroll within this container
                            </button>
                        </ScrollArea>

                        <ScrollArea style={{ height: 1000 }}>
                            This container won't scroll
                        </ScrollArea>
                    </div>
                )}
            </ScrollTo>
        );
    }
}