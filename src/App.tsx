import React from "react";
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

const App = () => {
  const users = [
    { id: 1, name: "山田 太郎", age: 30, email: "taro@example.com" },
    { id: 2, name: "鈴木 花子", age: 25, email: "hanako@example.com" },
    { id: 3, name: "加藤 麻生", age: 33, email: "maki@example.com" },
    { id: 4, name: "金山 大生", age: 25, email: "taisei@example.com" },
    
  ];

  return (
    <Container maxWidth="sm">
      <Typography variant="h5" gutterBottom>
        ユーザー一覧
      </Typography>

      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>年齢</TableCell>
              <TableCell>メール</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.age}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default App;
