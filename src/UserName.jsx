import { useUserQuery } from './hooks/useUserQuery';
import { useState } from 'react';

export default function UserName() {
  const { isSuccess: isSuccess1, data: data1 } = useUserQuery(1);
  //const { isSuccess: isSuccess2, data: data2 } = useUserQuery(2);
  const [Num, setNum] = useState(0);
  console.log(data1);

  return (
    <div className="UserName">
      <h1>User Name</h1>
      <p>{Num}</p>
      <button onClick={() => setNum(Num + 1)}>plus</button>

      <h2>name1:{isSuccess1 && data1.name}</h2>
    </div>
  );
}
