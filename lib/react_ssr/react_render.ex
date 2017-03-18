defmodule ReactSsr.ReactRender do
  @node_env if System.get_env("MIX_ENV") == "prod", do: "production", else: "development"

  def start_link do
    Agent.start_link(fn -> %{} end, name: __MODULE__)
  end

  def get_react_string(react_args \\ %{}) do
    react_dom_render(react_args)
  end
  
  # TODO don't call node on every request
  def react_dom_render(react_args \\ %{}) do
    case System.cmd("node", [to_string(:code.priv_dir(:react_ssr)) <> "/static/react_script.js", @node_env, (to_string react_args)], stderr_to_stdout: true)  do
      {react_html, 0} -> 
        Agent.update(__MODULE__, &Map.put(&1, :react_string, react_html))
        react_html
      {err, 1} ->
        IO.inspect err
    end
  end
end
