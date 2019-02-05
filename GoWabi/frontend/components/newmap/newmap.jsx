import GoogleMapReact from 'google-map-react';
import { GoogleApiWrapper } from 'google-maps-react';
import React from 'react';

export default class NewMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchLocations();
    }
    
    render() {
        debugger;
        // const markers = this.props.locations.map((loc) => (
        //     <Marker className="markers"
        //         key={loc.id} >
        //         <DeckIndexItem
        //             key={deck.id}
        //             deck={deck} /> </Link>
        // ));
        return (
            <div style={{ height: "80vh", width: "60%" }}>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: "AIzaSyBdKGFAJbGj2l9yy3V68oPp7cMR1pxS1s0",
                        language: "english"
                    }}
                    defaultCenter={{ lat: 40.6944, lng: -73.9213 }}
                    defaultZoom={11}
                    className="new-map"
                />
            </div>
        );
    }
}
