import {  useState, useEffect , useRef} from 'react'

const Chess = () => {

  const initialActiveTrackCells = ['1-1', '2-2', '3-3', '4-4', '5-5', '6-6', '7-7']

  const [bishopSqare, setBishopSqare] = useState({
    'row': 0, 'col': 0
  })
  const [activeTrackCells, setActiveTrackCells] = useState(initialActiveTrackCells)

  const hasMounted = useRef(false);

  const board = [];

  for (let col = 0; col < 8; col++) {
    const rowSquares = [];
    for (let row = 0; row < 8; row++) {

      let colColor = ((col + row) % 2 === 0) ? 'white' : 'grey'
      if (row === bishopSqare['row'] && col === bishopSqare['col']) {
        colColor = 'lightblue'
      }
      if (activeTrackCells.includes(`${row}-${col}`)) {
        colColor = 'blue'
      }

      rowSquares.push(
        <div
          key={`${row}-${col}`}
          className='square' 
          style={{backgroundColor: colColor}}// Alternate rowumns black and white
          onClick={() => setBishopSqare({'row': row, 'col': col})}
        >{row} {col} </div>
      );
    }
    board.push(
      <div key={col} className="col">
        {rowSquares}
      </div>
    );
  }

  useEffect(() => {

    if (!hasMounted.current) {
      hasMounted.current = true; // Skip the initial state change
      return;
  }

    const trackCells = []

    let i, k, m, o
    i = k = m = o = bishopSqare['row'];
    let j, l, n, p
    j = l = n = p = bishopSqare['col'];

    while (i !== 0 || j !== 0) {
      console.log(`i is ${i} and j is ${j}`);
      i++;
      j--;
      trackCells.push(`${i}-${j}`)
      if (i === 0 || j === 0) break;
    }

    while (k !== 0 || l !== 0) {
      console.log(`k is ${k} and j is ${l}`);
      k--;
      l--;
      trackCells.push(`${k}-${l}`)
      if (k === 0 || l === 0) break;
    }

    while (m !== 0 || n !== 0) {
      m--;
      n++;
      trackCells.push(`${m}-${n}`);
      if (m === 7 || n === 7) break;
    }

    while (o !== 0 || p !== 0) {
      console.log(`o is ${o} and p is ${p}`);
      o++;
      p++;
      trackCells.push(`${o}-${p}`)
      if (o === 7 || p === 7) break;
    }
    
    setActiveTrackCells(trackCells)

  }, [bishopSqare])

  return (
    <>
      <div className="chessboard">{board}</div>
    </>
  )

  
}

export default Chess