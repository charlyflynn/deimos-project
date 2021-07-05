import { Canvas } from '@react-three/fiber'
import postTaxIncome from './postTaxIncome.json';

function App() {
const rows = postTaxIncome.map((item) => <tr key={item.percentile}><td>{item.country}</td>
<td>{item.percentile}</td>
<td>{item.year}</td>
<td>{item.disposable_income}</td>
</tr>);

const headings = Object.keys(postTaxIncome[0]).map((item) => <th key={item} >{item}</th>)

  return (
    <div className="App">
      <div id="canvas-container">
<table> 
<thead><tr>
{headings}</tr></thead>
  <tbody>
  {rows}

  </tbody>
</table>
      <Canvas />
      </div>
    </div>
  );
}

export default App;
