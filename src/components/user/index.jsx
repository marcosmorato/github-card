import { Card } from "antd";
import "antd/dist/antd.css";

const User = ({ user: { name, avatar_url, html_url, bio }, active }) => {
  const { Meta } = Card;

  return (
    <div>
      <Card
        hoverable
        style={{ width: 400, border: "white 5px solid" }}
        cover={<img alt="perfil" src={avatar_url} />}
      >
        <Meta title={name} description={bio} />
      </Card>
    </div>
  );
};

export default User;
