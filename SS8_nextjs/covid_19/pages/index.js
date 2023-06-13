import axios from "axios";

export default function Home({dataCovid}){
    return (
      <div className="container">
        <h1 className="text-center">Vietnam's COVID-19 Infomation</h1>
        <table className="table table-striped border bounded-1">
           <thead>
            <tr>
                <th>Name</th>
                <th>Death</th>
                <th>Treating</th>
                <th>Cases</th>
                <th>Recovered</th>
                <th>Cases today</th>
            </tr>
           </thead>
           <tbody>
           {
               dataCovid.map((data) => (
                   <tr key={data.name}>
                       <td>{data.name}</td>
                       <td>{data.death}</td>
                       <td>{data.treating}</td>
                       <td>{data.cases}</td>
                       <td>{data.recovered}</td>
                       <td>{data.casesToday}</td>
                   </tr>
               ))
           }
           </tbody>
        </table>
      </div>
    )
}

export const getStaticProps = async () => {

    const response = await axios.get('http://localhost:8080/location')

    return {
        props: {
            dataCovid: response.data
        }
    }
}