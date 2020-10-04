(window.webpackJsonp=window.webpackJsonp||[]).push([[114],{263:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(1),r=a(9),b=(a(0),a(329)),c={last_modified_on:"2020-10-04",title:"Amazon Web Services (AWS)",description:"Learn how to configure and plug your Amazon Web Services (AWS) account"},l={id:"using-qovery/configuration/business/cloud-account/amazon-web-services",title:"Amazon Web Services (AWS)",description:"Learn how to configure and plug your Amazon Web Services (AWS) account",source:"@site/docs/using-qovery/configuration/business/cloud-account/amazon-web-services.md",permalink:"/docs/using-qovery/configuration/business/cloud-account/amazon-web-services",editUrl:"https://github.com/Qovery/documentation/edit/master/website/docs/using-qovery/configuration/business/cloud-account/amazon-web-services.md",sidebar:"docs",previous:{title:"Cloud Account",permalink:"/docs/using-qovery/configuration/business/cloud-account"},next:{title:"Azure",permalink:"/docs/using-qovery/configuration/business/cloud-account/azure"}},i=[{value:"Add your AWS account",id:"add-your-aws-account",children:[{value:"Required IAM permissions",id:"required-iam-permissions",children:[]}]},{value:"Remove your AWS account",id:"remove-your-aws-account",children:[]},{value:"Available regions",id:"available-regions",children:[]},{value:"Kubernetes",id:"kubernetes",children:[]},{value:"FAQ",id:"faq",children:[{value:"How to choose a region?",id:"how-to-choose-a-region",children:[]},{value:"I don&#39;t find a region that is provided by AWS",id:"i-dont-find-a-region-that-is-provided-by-aws",children:[]},{value:"Migrate between Cloud providers and regions",id:"migrate-between-cloud-providers-and-regions",children:[]}]}],o={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"add-your-aws-account"},"Add your AWS account"),Object(b.b)("p",null,"TODO"),Object(b.b)("h3",{id:"required-iam-permissions"},"Required IAM permissions"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": [\n                "iam:*",\n                "s3:*",\n                "cloudwatch:*",\n                "autoscaling:*",\n                "application-autoscaling:*",\n                "elasticloadbalancing:*",\n                "organizations:DescribeAccount",\n                "organizations:DescribeOrganization",\n                "organizations:DescribeOrganizationalUnit",\n                "organizations:DescribePolicy",\n                "organizations:ListChildren",\n                "organizations:ListParents",\n                "organizations:ListPoliciesForTarget",\n                "organizations:ListRoots",\n                "organizations:ListPolicies",\n                "organizations:ListTargetsForPolicy",\n                "dynamodb:*",\n                "ecr:*",\n                "ec2:*",\n                "cloudtrail:LookupEvents",\n                "kms:DescribeKey",\n                "kms:ListAliases",\n                "dynamodb:*",\n                "tag:GetResources",\n                "rds:*",\n                "ecs:*",\n                "eks:*",\n                "logs:*",\n                "events:DescribeRule",\n                "events:DeleteRule",\n                "events:ListRuleNamesByTarget",\n                "events:ListTargetsByRule",\n                "events:PutRule",\n                "events:PutTargets",\n                "es:AddTags",\n                "es:RemoveTags",\n                "es:ListTags",\n                "es:DeleteElasticsearchDomain",\n                "es:DescribeElasticsearchDomain",\n                "es:CreateElasticsearchDomain",\n                "events:RemoveTargets",\n                "kms:EnableKeyRotation",\n                "kms:EnableKey",\n                "kms:ImportKeyMaterial",\n                "kms:Decrypt",\n                "kms:UpdateKeyDescription",\n                "kms:GenerateDataKeyWithoutPlaintext",\n                "kms:Verify",\n                "kms:CancelKeyDeletion",\n                "kms:DeleteImportedKeyMaterial",\n                "kms:GenerateDataKeyPairWithoutPlaintext",\n                "kms:DisableKey",\n                "kms:GenerateDataKeyPair",\n                "kms:ReEncryptFrom",\n                "kms:DisableKeyRotation",\n                "kms:UpdateAlias",\n                "kms:Encrypt",\n                "kms:ScheduleKeyDeletion",\n                "kms:GenerateDataKey",\n                "kms:CreateAlias",\n                "kms:ReEncryptTo",\n                "kms:Sign",\n                "kms:DeleteAlias",\n                "kms:DeleteCustomKeyStore",\n                "kms:GenerateRandom",\n                "kms:UpdateCustomKeyStore",\n                "kms:DisconnectCustomKeyStore",\n                "kms:CreateKey",\n                "kms:ConnectCustomKeyStore",\n                "kms:CreateCustomKeyStore"\n            ],\n            "Resource": "*"\n        }\n    ]\n}\n')),Object(b.b)("h2",{id:"remove-your-aws-account"},"Remove your AWS account"),Object(b.b)("p",null,"TODO"),Object(b.b)("h2",{id:"available-regions"},"Available regions"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"supported"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/us-west-2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US West (Oregon)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/us-east-2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US East (Ohio)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/us-east-1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US East (N. Virginia)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddfa\ud83c\uddf8"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/us-west-1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"US West (N. California)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddff\ud83c\udde6"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/af-south-1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Africa (Cape Town)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udded\ud83c\uddf0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-east-1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Hong Kong)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddee\ud83c\uddf3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-south-1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Mumbai)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddef\ud83c\uddf5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-northeast-1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Tokyo)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddf0\ud83c\uddf7"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-northeast-2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Seoul)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddef\ud83c\uddf5"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-northeast-3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Osaka)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddf8\ud83c\uddec"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-southeast-1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Singapore)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde6\ud83c\uddfa"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ap-southeast-2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Asia Pacific (Sydney)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde8\ud83c\udde6"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/ca-central-1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Canada (Central)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde9\ud83c\uddea"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-central-1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Frankfurt)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddee\ud83c\uddea"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-west-1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Ireland)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-west-2"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (London)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddeb\ud83c\uddf7"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-west-3"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Paris)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddee\ud83c\uddf9"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-south-1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Milan)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\uddf8\ud83c\uddea"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/eu-north-1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Europe (Stockholm)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde7\ud83c\udded"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/me-south-1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Middle East (Bahrain)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"\ud83c\udde7\ud83c\uddf7"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"aws/sa-east-1"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"South America (S\xe3o Paulo)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"yes")))),Object(b.b)("h2",{id:"kubernetes"},"Kubernetes"),Object(b.b)("p",null,"TODO"),Object(b.b)("h2",{id:"faq"},"FAQ"),Object(b.b)("h3",{id:"how-to-choose-a-region"},"How to choose a region?"),Object(b.b)("p",null,"Different datacenters are located in different geographic areas, and you may want to keep your site physically close to the bulk of your user base for reduced latency."),Object(b.b)("h3",{id:"i-dont-find-a-region-that-is-provided-by-aws"},"I don't find a region that is provided by AWS"),Object(b.b)("p",null,"We are probably testing the support of this region, please ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.qovery.com/contact"}),"contact us")," to know what's the status"),Object(b.b)("h3",{id:"migrate-between-cloud-providers-and-regions"},"Migrate between Cloud providers and regions"),Object(b.b)("p",null,"Today, you can't migrate an environment from one region to another after it has been created. Vote ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://roadmap.qovery.com/"}),"here")," if you need this feature."))}s.isMDXComponent=!0},329:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,p=u["".concat(c,".").concat(d)]||u[d]||O[d]||b;return a?r.a.createElement(p,l({ref:t},o,{components:a})):r.a.createElement(p,l({ref:t},o))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);