import{d as y,a as T,b as i,e as o,j as t}from"./factory-ipR54GVd.js";import{c as x}from"./create-styled-context-tAUuuwz2.js";import"./index-DogsOklH.js";/**
 * @license lucide-react v0.323.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=y("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]),b=T({slots:{root:["relative","w-full","rounded-lg","border","p-4","has-[.icon]:pl-11"],icon:["icon","absolute","left-4","top-4","text-foreground"],title:["mb-1","font-medium","leading-none","tracking-tight"],description:["text-sm","[&_p]:leading-relaxed"]},variants:{variant:{default:{root:["bg-background","text-foreground"]},destructive:{root:["border-destructive/50","text-destructive","dark:border-destructive"],icon:["text-destructive"]}}},defaultVariants:{variant:"default"}}),{withProvider:D,withContext:s}=x(b),l=D(i.div,"root",{role:"alert","data-part":"test"}),V=s(i.div,"icon"),C=s(i.h5,"title"),I=s(i.div,"description",{"data-part":"description"}),e=Object.assign(l,{Root:l,Icon:V,Title:C,Description:I});try{e.displayName="Alert",e.__docgenInfo={description:"",displayName:"Alert",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"destructive"'}]}},class:{defaultValue:null,description:"",name:"class",required:!1,type:{name:"ClassNameValue"}},classes:{defaultValue:null,description:"",name:"classes",required:!1,type:{name:"Classes<TVReturnType<{ variant: { default: { root: string[]; }; destructive: { root: string[]; icon: string[]; }; }; }, { root: string[]; icon: string[]; title: string[]; description: string[]; }, undefined, TVConfig<{ variant: { default: { ...; }; destructive: { ...; }; }; }, { ...; }>, { ...; }, { ...; }, TVReturn..."}},unstyled:{defaultValue:null,description:"",name:"unstyled",required:!1,type:{name:"boolean"}}}}}catch{}const k={title:"Alert",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},r={render:()=>o(e,{children:[t(e.Icon,{asChild:!0,children:t(v,{className:"h-4 w-4"})}),t(e.Title,{children:"Basic Alert!"}),t(e.Description,{children:"You can add components and dependencies to your app using the cli."})]})},n={render:()=>o(e,{children:[t(e.Title,{children:"Basic Alert! - no icon"}),t(e.Description,{children:"You can add components and dependencies to your app using the cli."})]})},a={render:()=>o(e,{variant:"destructive",children:[t(e.Icon,{asChild:!0,children:t(v,{className:"h-4 w-4"})}),t(e.Title,{children:"Error Alert!"}),t(e.Description,{children:"You can add components and dependencies to your app using the cli."})]})};var c,d,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => {
    return <Alert>
        <Alert.Icon asChild>
          <Terminal className="h-4 w-4" />
        </Alert.Icon>
        <Alert.Title>Basic Alert!</Alert.Title>
        <Alert.Description>
          You can add components and dependencies to your app using the cli.
        </Alert.Description>
      </Alert>;
  }
}`,...(u=(d=r.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,m,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    return <Alert>
        <Alert.Title>Basic Alert! - no icon</Alert.Title>
        <Alert.Description>
          You can add components and dependencies to your app using the cli.
        </Alert.Description>
      </Alert>;
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var f,g,A;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    return <Alert variant="destructive">
        <Alert.Icon asChild>
          <Terminal className="h-4 w-4" />
        </Alert.Icon>
        <Alert.Title>Error Alert!</Alert.Title>
        <Alert.Description>
          You can add components and dependencies to your app using the cli.
        </Alert.Description>
      </Alert>;
  }
}`,...(A=(g=a.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};const E=["Basic","NoIcon","Error"];export{r as Basic,a as Error,n as NoIcon,E as __namedExportsOrder,k as default};
