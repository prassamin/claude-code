export type ConnectorTextBlock = {
  type: "connector_text";
  text: string;
  [key: string]: any;
};

export function isConnectorTextBlock(block: any): block is ConnectorTextBlock {
  return block && typeof block === "object" && block.type === "connector_text";
}
