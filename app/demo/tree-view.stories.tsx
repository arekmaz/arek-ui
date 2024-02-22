import { TreeView } from "~/components/ui/tree-view";
import { Story } from "./storyHelpers";
import { FileIcon, FolderIcon } from "lucide-react";

const Basic = () => {
  return (
    <TreeView>
      <TreeView.Label>Basic</TreeView.Label>
      <TreeView.Tree>
        <TreeView.Branch id="node_modules" depth={1}>
          <TreeView.BranchControl id="node_modules" depth={1}>
            <TreeView.BranchText id="node_modules" depth={1}>
              <FolderIcon />
              node_modules
            </TreeView.BranchText>
          </TreeView.BranchControl>

          <TreeView.BranchContent id="node_modules" depth={1}>
            <TreeView.Item id="node_modules/zag-js" depth={2}>
              <FileIcon />
              zag-js
            </TreeView.Item>
            <TreeView.Item id="node_modules/pandacss" depth={2}>
              <FileIcon />
              panda
            </TreeView.Item>

            <TreeView.Branch id="node_modules/@types" depth={2}>
              <TreeView.BranchControl id="node_modules/@types" depth={2}>
                <TreeView.BranchText id="node_modules/@types" depth={2}>
                  <FolderIcon />
                  @types
                </TreeView.BranchText>
              </TreeView.BranchControl>

              <TreeView.BranchContent id="node_modules/@types" depth={2}>
                <TreeView.Item id="node_modules/@types/react" depth={3}>
                  <FileIcon />
                  react
                </TreeView.Item>
                <TreeView.Item id="node_modules/@types/react-dom" depth={3}>
                  <FileIcon />
                  react-dom
                </TreeView.Item>
              </TreeView.BranchContent>
            </TreeView.Branch>
          </TreeView.BranchContent>
        </TreeView.Branch>

        <TreeView.Branch id="src" depth={1}>
          <TreeView.BranchControl id="src" depth={1}>
            <TreeView.BranchText id="src" depth={1}>
              <FolderIcon />
              src
            </TreeView.BranchText>
          </TreeView.BranchControl>

          <TreeView.BranchContent id="src" depth={1}>
            <TreeView.Item id="src/app.tsx" depth={2}>
              <FileIcon />
              app.tsx
            </TreeView.Item>
            <TreeView.Item id="src/index.ts" depth={2}>
              <FileIcon />
              index.ts
            </TreeView.Item>
          </TreeView.BranchContent>
        </TreeView.Branch>

        <TreeView.Item id="panda.config" depth={1}>
          <FileIcon />
          panda.config.ts
        </TreeView.Item>
        <TreeView.Item id="package.json" depth={1}>
          <FileIcon />
          package.json
        </TreeView.Item>
        <TreeView.Item id="renovate.json" depth={1}>
          <FileIcon />
          renovate.json
        </TreeView.Item>
        <TreeView.Item id="readme.md" depth={1}>
          <FileIcon />
          README.md
        </TreeView.Item>
      </TreeView.Tree>
    </TreeView>
  );
};

export const TreeViews = () => {
  return (
    <Story title="Tree Views" componentFilename="tree-view">
      <Basic />
    </Story>
  );
};
