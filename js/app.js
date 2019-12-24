class countryList extends React.Component {
    render(){
        return(
            <div className=countries>
                <select>
                    <option>IND</option>
                    <option>AUS</option>
                    <option>NZ</option>
                    <option>ENG</option>
                    <option>SA</option>
                    <option>SL</option>
                    <option>WI</option>
                    <option>PAK</option>
                    <option>BAN</option>
                </select>
            </div>
        )
    }
}
ReactDome.render('<countryList/>',document.getElementById('react-root'));