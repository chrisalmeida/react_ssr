defmodule ReactSsr.PageController do
  use ReactSsr.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
