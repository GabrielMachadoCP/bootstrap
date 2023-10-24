
import './App.css'

function App() {
  return (
    <>
      <h1>Aula Bootstrap</h1>
      <div className='row'>
        <div className="col-md-6 col-lg-4 col-xl-3">COL-3</div>
        <div className="col-md-6 col-lg-4 col-xl-3">COL-3</div>
        <div className="col-md-6 col-lg-4 col-xl-3">COL-3</div>
        <div className="col-md-6 col-lg-4 col-xl-3">COL-3</div>
        </div>

        <div className="container text-dark text-center bg-primary border border-dark">Container</div>
        <div className="container-sm text-secondary border border-dark">Container</div>
        <div className="container-md text-success border border-dark">Container</div>
        <div className="container-lg text-danger border border-dark">Container</div>
        <div className="container-xl text-warning bg-dark border border-dark">Container</div>
        <div className="container-xxl bg-warning border border-dark">Container</div>
        <div className="container-fluid border border-dark">
          <p className='m-4 p-5 border border-primary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, obcaecati!</p>
        </div>

        <button className='btn btn-primary'>CLIQUE AQUI</button>
        <button className='btn btn-secondary'>CLIQUE AQUI</button>
        <button className='btn btn-success'>CLIQUE AQUI</button>
        <button className='btn btn-danger'>CLIQUE AQUI</button>
        <button className='btn btn-warning'>CLIQUE AQUI</button>
        <button className='btn btn-info'>CLIQUE AQUI</button>
        <button className='btn btn-light'>CLIQUE AQUI</button>
        <button className='btn btn-dark'>CLIQUE AQUI</button>
        <button className='btn btn-link'>CLIQUE AQUI</button>
        <br/><br/>
        <button className='btn btn-outline-primary'>CLIQUE AQUI</button>
        <button className='btn btn-outline-secondary'>CLIQUE AQUI</button>
        <button className='btn btn-outline-success'>CLIQUE AQUI</button>
        <button className='btn btn-outline-danger'>CLIQUE AQUI</button>
        <button className='btn btn-outline-warning'>CLIQUE AQUI</button>
        <button className='btn btn-outline-info'>CLIQUE AQUI</button>
        <button className='btn btn-outline-light'>CLIQUE AQUI</button>
        <button className='btn btn-outline-dark'>CLIQUE AQUI</button>
        <button className='btn btn-outline-link'>CLIQUE AQUI</button>
        <br /><br />
        <table className='table table-striped table-bordered table-hover'>
          <thead className='table-primary'>
            <tr>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Telefone</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bianca</td>
              <td>Rua Tal, 55</td>
              <td>99823-5234</td>
            </tr>
            <tr>
              <td>Gabriel</td>
              <td>Rua Tal, 95</td>
              <td>99782-8324</td>
            </tr>
            <tr>
              <td>João</td>
              <td>Rua Tal, 659</td>
              <td>99483-5211</td>
            </tr>
          </tbody>
        </table>
    </>
  )
}

export default App
