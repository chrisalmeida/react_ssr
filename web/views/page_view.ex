defmodule ReactSsr.PageView do
  use ReactSsr.Web, :view
  def react(props) do
    props = Poison.Encoder.encode(props, []) |> to_string
    ReactSsr.ReactRender.get_react_string(props)
  end
end
