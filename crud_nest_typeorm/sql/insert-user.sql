-- https://marketplace.visualstudio.com/items?itemName=ms-ossdata.vscode-pgsql
INSERT INTO
    public.memos ("text", "to", "from", "wasRead")
VALUES
    (
        'Mensagem de teste',
        'antonio',
        'isadora',
        false
    );