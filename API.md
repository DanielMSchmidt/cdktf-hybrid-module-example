# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MyConstruct <a name="MyConstruct" id="cdktf-hybrid-module-example.MyConstruct"></a>

#### Initializers <a name="Initializers" id="cdktf-hybrid-module-example.MyConstruct.Initializer"></a>

```typescript
import { MyConstruct } from 'cdktf-hybrid-module-example'

new MyConstruct(scope: Construct, id: string, config: MyConstructOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-hybrid-module-example.MyConstruct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#cdktf-hybrid-module-example.MyConstruct.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#cdktf-hybrid-module-example.MyConstruct.Initializer.parameter.config">config</a></code> | <code><a href="#cdktf-hybrid-module-example.MyConstructOptions">MyConstructOptions</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="cdktf-hybrid-module-example.MyConstruct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="cdktf-hybrid-module-example.MyConstruct.Initializer.parameter.id"></a>

- *Type:* string

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-hybrid-module-example.MyConstruct.Initializer.parameter.config"></a>

- *Type:* <a href="#cdktf-hybrid-module-example.MyConstructOptions">MyConstructOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-hybrid-module-example.MyConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="cdktf-hybrid-module-example.MyConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#cdktf-hybrid-module-example.MyConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### `isConstruct` <a name="isConstruct" id="cdktf-hybrid-module-example.MyConstruct.isConstruct"></a>

```typescript
import { MyConstruct } from 'cdktf-hybrid-module-example'

MyConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="cdktf-hybrid-module-example.MyConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-hybrid-module-example.MyConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#cdktf-hybrid-module-example.MyConstruct.property.config">config</a></code> | <code><a href="#cdktf-hybrid-module-example.MyConstructOptions">MyConstructOptions</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="cdktf-hybrid-module-example.MyConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `config`<sup>Required</sup> <a name="config" id="cdktf-hybrid-module-example.MyConstruct.property.config"></a>

```typescript
public readonly config: MyConstructOptions;
```

- *Type:* <a href="#cdktf-hybrid-module-example.MyConstructOptions">MyConstructOptions</a>

---


## Structs <a name="Structs" id="Structs"></a>

### MyConstructOptions <a name="MyConstructOptions" id="cdktf-hybrid-module-example.MyConstructOptions"></a>

#### Initializer <a name="Initializer" id="cdktf-hybrid-module-example.MyConstructOptions.Initializer"></a>

```typescript
import { MyConstructOptions } from 'cdktf-hybrid-module-example'

const myConstructOptions: MyConstructOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#cdktf-hybrid-module-example.MyConstructOptions.property.propertyA">propertyA</a></code> | <code>string</code> | *No description.* |

---

##### `propertyA`<sup>Required</sup> <a name="propertyA" id="cdktf-hybrid-module-example.MyConstructOptions.property.propertyA"></a>

```typescript
public readonly propertyA: string;
```

- *Type:* string

---



