import "./App.css";
import { useQuery } from "@tanstack/react-query";

function App() {
  const query = useQuery({
    queryKey: ["test"],
    queryFn: async () => {},
    staleTime: 1000 * 60, // has in-editor docs
    gcTime: 1000 * 60 * 60, // does not have in-editor docs
  });

  return <pre>{JSON.stringify(query, null, 2)}</pre>;
}

export default App;
