---
last_modified_on: "2021-09-06"
title: "Digital Ocean (DO)"
description: "Learn how to configure and plug your Digital Ocean (DO) account"
---

import Steps from '@site/src/components/Steps';
import Alert from '@site/src/components/Alert';
import Assumptions from '@site/src/components/Assumptions';

Qovery lets you quickly deploy applications to your [Digital Ocean (DO)][urls.digital_ocean] account. No knowledge needed, and it takes less than 20 minutes to install Qovery on your Digital Ocean account.

<Alert type="info">

Do you want to know more about how Qovery works on your Digital Ocean account? [Here][docs.useful-resources.faq#how-qovery-works-under-the-hood] is explained how Qovery works under the hood.

</Alert>

<!--
SCHEMA: Show a schema where Qovery is deployed on the account of the customer
-->

<!--
     THIS FILE IS AUTOGENERATED!

     To make changes please edit the template located at:

     website/docs/using-qovery/configuration/cloud-service-provider/digital-ocean.md.erb
-->

## Getting started

<Assumptions>

* You have a [Qovery][docs.using-qovery.interface] account
* You have created an [Organization][docs.using-qovery.configuration.organization]
* You have a Digital Ocean account

</Assumptions>

### Connect your Digital Ocean account

To link your Digital Ocean account to Qovery you need to provide a Digital Ocean `access key id`, `secret access key` and a `personal access token`.

<Alert type="info">

You can link more than one Digital Ocean account. Qovery also support multiple Cloud providers within the same Organization. Meaning, you can balance your workload on different Cloud providers. [Read more][guides.advanced].

</Alert>

#### Create your Digital Ocean credentials - `access key id`, `secret access key` and `personal access token`.

<Steps headingDepth={3}>
<ol>

<li>

[Connect to your Digital Ocean console](https://cloud.digitalocean.com)

</li>

<li>

Go to `API`
<img src="/img/do-create-token-1.jpg" />

</li>

<li>

<img src="/img/do-create-token-2.jpg" />

</li>

<li>

<img src="/img/do-create-token-3.jpg" />

</li>

<li>

Copy the generated `personal access token`.

<img src="/img/do-create-token-4.jpg" />

</li>

<li>

<img src="/img/do-create-token-5.jpg" />

</li>

<li>

Copy the generated `access key id` and `secret access key`.

<img src="/img/do-create-token-6.jpg" />

</li>

</ol>

</Steps>

Well done!! You now have your Digital Ocean `access key id`, `secret access key` and `personal token`; It's time to connect Qovery to your Digital Ocean account.

#### Use Digital Ocean credentials with Qovery

*this section is under development - [join us][urls.qovery_chat] and be part of the first to try it*

### Remove your Digital Ocean account

*this section is under development - [join us][urls.qovery_chat] and be part of the first to try it*

### Delete Qovery from your Digital Ocean account

<Alert type="warning">

Your applications and your data will be deleted.

</Alert>

To delete Qovery from your Digital Ocean account you must be the owner of the Organization.
Once your Digital Ocean account removed from Qovery, everything configured (VPC, Kubernetes, ...) by Qovery will be deleted forever.

## Regions

Qovery supports the following AWS regions:

| | name        | description
|-|-------------|--------------------------
|🇺🇸| nyc-1      | New York DC1 (USA)
|🇺🇸| nyc-3      | New York DC3 (USA)
|🇺🇸| sfo-2      | San Francisco DC2 (USA)
|🇺🇸| sfo-3      | San Francisco DC3 (USA)
|🇳🇱| ams-3      | Amsterdam DC3 (Netherlands)
|🇸🇬| sgp-1      | Singapore DC1 (Asia)
|🇬🇧| lon-1      | London DC1 (UK)
|🇩🇪| fra-1      | Frankfurt DC1 (Germany)
|🇨🇦| tor-1      | Toronto DC1 (Canada)
|🇮🇳| blr-1      | Bangalore DC1 (India)

Qovery supports regions where [Digital Ocean Kubernetes](https://www.digitalocean.com/products/kubernetes/) is supported.

## How Qovery works on Digital Ocean

Qovery is an abstraction layer on top of Digital Ocean and Kubernetes. Qovery manages the configuration of Digital Ocean account, and helps your to deploy production ready apps in seconds.
To make it works, Qovery rely on Kubernetes for stateless apps (containers), and  Digital Ocean for stateful apps (databases, storage...).

### Kubernetes

The first time you set up your Digital Ocean account, Qovery creates a Kubernetes cluster in your chosen region. Qovery managed it for you - no action required. It takes ~15 minutes to configure and bootstrap a Kubernetes cluster. Once bootstrapped, your Kubernetes cluster runs the Qovery app and is ready to deploy your applications.

### Managed services

Digital Ocean provides managed services for [PostgreSQL][docs.using-qovery.configuration.database.postgresql], [MySQL][docs.using-qovery.configuration.database.mysql], [Redis][docs.using-qovery.configuration.database.redis], [MongoDB][docs.using-qovery.configuration.database.mongodb]. Qovery gives you access to those services when you set the [environment mode][docs.using-qovery.configuration.deployment-rule#environment-deployment-rules] to `Production`. In `Development` mode, Qovery provides containers equivalent, which is cheaper and faster to start.

### Security and compliance

Qovery runs your Kubernetes cluster and is autonomous to manage your applications, which means:
- Your configuration are stored on your Digital Ocean account.
- Your configuration is encrypted on your Digital Ocean account.
- Qovery can't access to your data.

## FAQ

### How to choose a region?

Different datacenters are located in different geographic areas, and you may want to keep your site physically close to the bulk of your user base for reduced latency.

### I don't find a region that is provided by Digital Ocean

We are probably testing the support of this region, please [contact us][urls.qovery_contact_us] to know what's the status

### Migrate between Cloud providers and regions

Today, you can't migrate an environment from one region to another after it has been created. Vote [here][urls.qovery_roadmap] if you need this feature.


[docs.useful-resources.faq#how-qovery-works-under-the-hood]: /docs/useful-resources/faq/#how-qovery-works-under-the-hood
[docs.using-qovery.configuration.database.mongodb]: /docs/using-qovery/configuration/database/mongodb/
[docs.using-qovery.configuration.database.mysql]: /docs/using-qovery/configuration/database/mysql/
[docs.using-qovery.configuration.database.postgresql]: /docs/using-qovery/configuration/database/postgresql/
[docs.using-qovery.configuration.database.redis]: /docs/using-qovery/configuration/database/redis/
[docs.using-qovery.configuration.deployment-rule#environment-deployment-rules]: /docs/using-qovery/configuration/deployment-rule/#environment-deployment-rules
[docs.using-qovery.configuration.organization]: /docs/using-qovery/configuration/organization/
[docs.using-qovery.interface]: /docs/using-qovery/interface/
[guides.advanced]: /guides/advanced/
[urls.digital_ocean]: https://www.digitalocean.com
[urls.qovery_chat]: https://discord.qovery.com
[urls.qovery_contact_us]: https://www.qovery.com/contact
[urls.qovery_roadmap]: https://roadmap.qovery.com/
