import{j as e}from"./index-BY56YOu8.js";import{c as t,d}from"./index-DgV5BBp5.js";import{r as p}from"./index-_2TAQcTa.js";import{P as c}from"./PlusCircle.esm-CeRgBLXz.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CQwh6Daz.js";const k={title:"Components/Toast",component:t,args:{title:"Cadastro realizado",description:"Cadastro realizado com sucesso!",open:!1,isClosable:!0,duration:5e3,withProgress:!1},argTypes:{open:{description:"Estado atual do toast, aberto ou fechado."},isClosable:{description:"Se o tooltip pode ser fechado antes do tempo",table:{type:{summary:"boolean"}}},duration:{description:"Tempo em ms para o tooltip desaparecer (em ms)",table:{defaultValue:{summary:"5000ms"},type:{summary:"number"}},control:{type:"number"}},withProgress:{description:"Se será adicionado uma barra de progresso para mostrar quando a toast sera fechada.",table:{type:{summary:"boolean"}}}}},a={render:o=>{const[r,s]=p.useState(!1);return e.jsxs("div",{children:[e.jsx(d,{onClick:()=>s(!0),children:e.jsx(c,{weight:"bold"})}),e.jsx(t,{...o,open:r,setOpen:s})]})}},n={args:{title:"Cadastro realizado",description:"Cadastro realizado com sucesso!",open:!1,isClosable:!1},render:o=>{const[r,s]=p.useState(!1);return e.jsxs("div",{children:[e.jsx(d,{onClick:()=>s(!0),children:e.jsx(c,{weight:"bold"})}),e.jsx(t,{...o,open:r,setOpen:s})]})}},i={args:{title:"Cadastro realizado",description:"Cadastro realizado com sucesso!",open:!1,isClosable:!1,duration:2e3},render:o=>{const[r,s]=p.useState(!1);return e.jsxs("div",{children:[e.jsx(d,{onClick:()=>s(!0),children:e.jsx(c,{weight:"bold"})}),e.jsx(t,{...o,open:r,setOpen:s})]})}},l={args:{title:"Cadastro realizado",description:"Cadastro realizado com sucesso!",open:!1,isClosable:!1,duration:2e3,withProgress:!0},render:o=>{const[r,s]=p.useState(!1);return e.jsxs("div",{children:[e.jsx(d,{onClick:()=>s(!0),children:e.jsx(c,{weight:"bold"})}),e.jsx(t,{...o,open:r,setOpen:s})]})}};var u,m,C;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}><PlusCircle weight='bold' /></Button>

        <Toast {...args} open={open} setOpen={setOpen} />
      </div>;
  }
}`,...(C=(m=a.parameters)==null?void 0:m.docs)==null?void 0:C.source}}};var g,f,b;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Cadastro realizado',
    description: 'Cadastro realizado com sucesso!',
    open: false,
    isClosable: false
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}><PlusCircle weight='bold' /></Button>

        <Toast {...args} open={open} setOpen={setOpen} />
      </div>;
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,x,O;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Cadastro realizado',
    description: 'Cadastro realizado com sucesso!',
    open: false,
    isClosable: false,
    duration: 2000
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}><PlusCircle weight='bold' /></Button>

        <Toast {...args} open={open} setOpen={setOpen} />
      </div>;
  }
}`,...(O=(x=i.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var j,w,z;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    title: 'Cadastro realizado',
    description: 'Cadastro realizado com sucesso!',
    open: false,
    isClosable: false,
    duration: 2000,
    withProgress: true
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <div>
        <Button onClick={() => setOpen(true)}><PlusCircle weight='bold' /></Button>

        <Toast {...args} open={open} setOpen={setOpen} />
      </div>;
  }
}`,...(z=(w=l.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};const E=["Primary","DontClose","LessTimeClose","withProgress"];export{n as DontClose,i as LessTimeClose,a as Primary,E as __namedExportsOrder,k as default,l as withProgress};
