export default async function login(req, res) {
  try {
    res.setHeader(
      "Set-Cookie",
      "login_token=Logged Out; expires=Thu, 01 Jan 1970 00:00:00 UTC; HttpOnly; Path=/api;  Domain=.nsut.alumninet.in"
    );
    res.json({ loggedOut: true });
  } catch {
    res.json({ error: true, message: "Some Error Occured" });
  }
}
