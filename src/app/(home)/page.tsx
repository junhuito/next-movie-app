"use client";
import { Container, Button, Typography, Input, FormLabel } from '@mui/material';
import { useCallback, useEffect, useMemo, useState } from 'react';

interface Todo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export default function Home() {

  const [data, setData] = useState<Todo>();
  const [todoId, setTodoId] = useState<number>(1);

  useEffect(() => {
    if (todoId) {
      fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
        .then(response => response.json())
        .then(json => setData(json))
    }
  }, [todoId])

  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  const reset = useCallback(() => {
    setA(0);
    setB(0);
  }, [])

  const sumResult = useMemo(() => a + b, [a, b])

  return (
    <Container className='space-y-4 p-10'>
      <Container>
        <FormLabel>Enter A:</FormLabel>
        <Input value={a} onChange={(e) => setA(Number(e.target.value))}/>
      </Container>

      <Container>
        <FormLabel>Enter B:</FormLabel>
        <Input value={b} onChange={(e) => setB(Number(e.target.value))}/>
      </Container>
      
      <Button variant="contained" onClick={reset}>Reset</Button>
      <Typography>Result: {a} + {b} = {sumResult}</Typography>

      <Container>
        <FormLabel>Enter Todo ID:</FormLabel>
        <Input value={todoId} onChange={(e) => setTodoId(Number(e.target.value))}/>
      </Container>

      <Container>
        <Typography variant="h4">Data from API</Typography>
        <Typography>ID: {data?.id}</Typography>
        <Typography>Title: {data?.title}</Typography>
        <Typography>Completed: {data?.completed ? 'Yes' : 'No'}</Typography>
        <Typography>User ID: {data?.userId}</Typography>
      </Container>

      <TodoItem onClick={onClick}/>
    </Container>
  );
}
