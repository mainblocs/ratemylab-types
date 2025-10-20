export type RTText = {
    type: "text";
    value?: string | null;
    text?: string | null;
};
export type RTParagraph = {
    type: "paragraph";
    children?: RTNode[];
};
export type RTListItem = {
    type: "list-item";
    children?: RTNode[];
};
export type RTList = {
    type: "list";
    listType?: "unordered" | "ordered";
    children?: RTNode[];
};
export type RTRoot = {
    type: "root";
    children?: RTNode[];
};
export type RTNode = RTText | RTParagraph | RTListItem | RTList | RTRoot | (Record<string, unknown> & {
    type?: string;
});
