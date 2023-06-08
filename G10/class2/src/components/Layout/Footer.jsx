import React from "react"

export default class Footer extends React.Component {

    constructor(props) {
        super(props)
        // console.log(props)
        console.log('constructor Footer')
    }


    render() {

        console.log('render Footer')

        return (
            <footer>Footer</footer>
        )
    }
}