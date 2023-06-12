const UserIDMap = new Map();

function SetUser(id, user) {
    UserIDMap.set(id, user);
}

function GetUser(id) {
  return UserIDMap.get(id);
}

module.exports = { SetUser , GetUser };
