import "./App.css";
import { useState } from "react";
import { Button, Input, Tooltip } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import User from "./components/user";

function App() {
  const [user, setUser] = useState([]);
  const [active, setActive] = useState(true);
  const [search, setSearch] = useState("");
  // const { user, active } = userAPI;

  const handleToggle = () => {
    fetch(`https://api.github.com/users/${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Not Found") {
          alert("usario não existe");
          setSearch("");
        } else {
          setUser(data);
          setActive(false);
        }
      });
  };

  const searchGit = (evt) => {
    setSearch(evt.target.value);
  };

  const clear = () => {
    setActive(true);
    setSearch("");
    setUser([]);
  };

  const showHidden = () => {
    if (user.length === 0) {
      return;
    }
    setActive(!active);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="search">
          <form className="input">
            <Input
              onChange={searchGit}
              value={search}
              placeholder="Insert the Username"
            ></Input>
          </form>
          <div className="button">
            <Tooltip title="search">
              <Button
                type="primary"
                onClick={handleToggle}
                icon={<SearchOutlined />}
              >
                Search
              </Button>
            </Tooltip>
          </div>
          <div className="button">
            <Button
              type="primary"
              onClick={showHidden}
              style={{ width: "75px" }}
            >
              {active ? "Show" : "Hidden"}
            </Button>
          </div>
          <div className="button">
            <Button type="primary" onClick={clear} style={{ width: "75px" }}>
              Clear
            </Button>
          </div>
        </div>

        {!active && (
          <div className="user">
            <User user={user} active={active} />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

// import { Button, Tooltip } from 'antd';
// import { SearchOutlined } from '@ant-design/icons';

// ReactDOM.render(
//   <>
//     <Tooltip title="search">
//       <Button type="primary" shape="circle" icon={<SearchOutlined />} />
//     </Tooltip>
//     <Button type="primary" shape="circle">
//       A
//     </Button>
//     <Button type="primary" icon={<SearchOutlined />}>
//       Search
//     </Button>
//     <Tooltip title="search">
//       <Button shape="circle" icon={<SearchOutlined />} />
//     </Tooltip>
//     <Button icon={<SearchOutlined />}>Search</Button>
//     <br />
//     <Tooltip title="search">
//       <Button shape="circle" icon={<SearchOutlined />} />
//     </Tooltip>
//     <Button icon={<SearchOutlined />}>Search</Button>
//     <Tooltip title="search">
//       <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
//     </Tooltip>
//     <Button type="dashed" icon={<SearchOutlined />}>
//       Search
//     </Button>
//   </>,
//   mountNode,
// );
