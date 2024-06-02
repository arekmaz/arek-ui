import { TreeView } from "~/components/ui/tree-view";
import { Story } from "./storyHelpers";
import { FileIcon, FolderIcon } from "lucide-react";

const Basic = () => {
  return (
    <TreeView>
      <TreeView.Label>Basic</TreeView.Label>
      <TreeView.Tree>
        <TreeView.Branch value="node_modules">
          <TreeView.BranchControl>
            <TreeView.BranchText>
              <FolderIcon />
              node_modules
            </TreeView.BranchText>
          </TreeView.BranchControl>

          <TreeView.BranchContent>
            <TreeView.Item value="node_modules/zag-js">
              <FileIcon />
              zag-js
            </TreeView.Item>
            <TreeView.Item value="node_modules/pandacss">
              <FileIcon />
              panda
            </TreeView.Item>

            <TreeView.Branch value="node_modules/@types">
              <TreeView.BranchControl>
                <TreeView.BranchText>
                  <FolderIcon />
                  @types
                </TreeView.BranchText>
              </TreeView.BranchControl>

              <TreeView.BranchContent>
                <TreeView.Item value="node_modules/@types/react">
                  <FileIcon />
                  react
                </TreeView.Item>
                <TreeView.Item value="node_modules/@types/react-dom">
                  <FileIcon />
                  react-dom
                </TreeView.Item>
              </TreeView.BranchContent>
            </TreeView.Branch>
          </TreeView.BranchContent>
        </TreeView.Branch>

        <TreeView.Branch value="src">
          <TreeView.BranchControl>
            <TreeView.BranchText>
              <FolderIcon />
              src
            </TreeView.BranchText>
          </TreeView.BranchControl>

          <TreeView.BranchContent>
            <TreeView.Item value="src/app.tsx">
              <FileIcon />
              app.tsx
            </TreeView.Item>
            <TreeView.Item value="src/index.ts">
              <FileIcon />
              index.ts
            </TreeView.Item>
          </TreeView.BranchContent>
        </TreeView.Branch>

        <TreeView.Item value="panda.config">
          <FileIcon />
          panda.config.ts
        </TreeView.Item>
        <TreeView.Item value="package.json">
          <FileIcon />
          package.json
        </TreeView.Item>
        <TreeView.Item value="renovate.json">
          <FileIcon />
          renovate.json
        </TreeView.Item>
        <TreeView.Item value="readme.md">
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
