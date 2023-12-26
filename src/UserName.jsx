import { useUserQuery } from './hooks/useUserQuery';
import { useState } from 'react';

export default function UserName() {
  const { isSuccess, data } = useUserQuery(1);
  const [Num, setNum] = useState(0);

  return (
    <div className="UserName">
      <h1>User Name</h1>
      <p>{Num}</p>
      <button onClick={() => setNum(Num + 1)}>plus</button>

      <h2>{isSuccess && data.name}</h2>
    </div>
  );
}
