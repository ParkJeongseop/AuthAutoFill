.class Landroidx/appcompat/widget/c;
.super Landroidx/appcompat/view/menu/a;
.source "SourceFile"

# interfaces
.implements Lq/b$a;


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/appcompat/widget/c$b;,
        Landroidx/appcompat/widget/c$c;,
        Landroidx/appcompat/widget/c$f;,
        Landroidx/appcompat/widget/c$a;,
        Landroidx/appcompat/widget/c$e;,
        Landroidx/appcompat/widget/c$d;
    }
.end annotation


# instance fields
.field A:Landroidx/appcompat/widget/c$a;

.field B:Landroidx/appcompat/widget/c$c;

.field private C:Landroidx/appcompat/widget/c$b;

.field final D:Landroidx/appcompat/widget/c$f;

.field E:I

.field k:Landroidx/appcompat/widget/c$d;

.field private l:Landroid/graphics/drawable/Drawable;

.field private m:Z

.field private n:Z

.field private o:Z

.field private p:I

.field private q:I

.field private r:I

.field private s:Z

.field private t:Z

.field private u:Z

.field private v:Z

.field private w:I

.field private final x:Landroid/util/SparseBooleanArray;

.field private y:Landroid/view/View;

.field z:Landroidx/appcompat/widget/c$e;


# direct methods
.method public constructor <init>(Landroid/content/Context;)V
    .locals 2

    sget v0, La/g;->c:I

    sget v1, La/g;->b:I

    invoke-direct {p0, p1, v0, v1}, Landroidx/appcompat/view/menu/a;-><init>(Landroid/content/Context;II)V

    new-instance p1, Landroid/util/SparseBooleanArray;

    invoke-direct {p1}, Landroid/util/SparseBooleanArray;-><init>()V

    iput-object p1, p0, Landroidx/appcompat/widget/c;->x:Landroid/util/SparseBooleanArray;

    new-instance p1, Landroidx/appcompat/widget/c$f;

    invoke-direct {p1, p0}, Landroidx/appcompat/widget/c$f;-><init>(Landroidx/appcompat/widget/c;)V

    iput-object p1, p0, Landroidx/appcompat/widget/c;->D:Landroidx/appcompat/widget/c$f;

    return-void
.end method

.method static synthetic p(Landroidx/appcompat/widget/c;)Landroidx/appcompat/view/menu/d;
    .locals 0

    iget-object p0, p0, Landroidx/appcompat/view/menu/a;->d:Landroidx/appcompat/view/menu/d;

    return-object p0
.end method

.method static synthetic q(Landroidx/appcompat/widget/c;)Landroidx/appcompat/view/menu/d;
    .locals 0

    iget-object p0, p0, Landroidx/appcompat/view/menu/a;->d:Landroidx/appcompat/view/menu/d;

    return-object p0
.end method

.method static synthetic r(Landroidx/appcompat/widget/c;)Landroidx/appcompat/view/menu/i;
    .locals 0

    iget-object p0, p0, Landroidx/appcompat/view/menu/a;->j:Landroidx/appcompat/view/menu/i;

    return-object p0
.end method

.method static synthetic s(Landroidx/appcompat/widget/c;)Landroidx/appcompat/view/menu/d;
    .locals 0

    iget-object p0, p0, Landroidx/appcompat/view/menu/a;->d:Landroidx/appcompat/view/menu/d;

    return-object p0
.end method

.method static synthetic t(Landroidx/appcompat/widget/c;)Landroidx/appcompat/view/menu/d;
    .locals 0

    iget-object p0, p0, Landroidx/appcompat/view/menu/a;->d:Landroidx/appcompat/view/menu/d;

    return-object p0
.end method

.method static synthetic u(Landroidx/appcompat/widget/c;)Landroidx/appcompat/view/menu/i;
    .locals 0

    iget-object p0, p0, Landroidx/appcompat/view/menu/a;->j:Landroidx/appcompat/view/menu/i;

    return-object p0
.end method

.method private w(Landroid/view/MenuItem;)Landroid/view/View;
    .locals 6

    iget-object v0, p0, Landroidx/appcompat/view/menu/a;->j:Landroidx/appcompat/view/menu/i;

    check-cast v0, Landroid/view/ViewGroup;

    const/4 v1, 0x0

    if-nez v0, :cond_0

    return-object v1

    :cond_0
    invoke-virtual {v0}, Landroid/view/ViewGroup;->getChildCount()I

    move-result v2

    const/4 v3, 0x0

    :goto_0
    if-ge v3, v2, :cond_2

    invoke-virtual {v0, v3}, Landroid/view/ViewGroup;->getChildAt(I)Landroid/view/View;

    move-result-object v4

    instance-of v5, v4, Landroidx/appcompat/view/menu/i$a;

    if-eqz v5, :cond_1

    move-object v5, v4

    check-cast v5, Landroidx/appcompat/view/menu/i$a;

    invoke-interface {v5}, Landroidx/appcompat/view/menu/i$a;->getItemData()Landroidx/appcompat/view/menu/e;

    move-result-object v5

    if-ne v5, p1, :cond_1

    return-object v4

    :cond_1
    add-int/lit8 v3, v3, 0x1

    goto :goto_0

    :cond_2
    return-object v1
.end method


# virtual methods
.method public A()Z
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/c;->z:Landroidx/appcompat/widget/c$e;

    if-eqz v0, :cond_0

    invoke-virtual {v0}, Landroidx/appcompat/view/menu/g;->d()Z

    move-result v0

    if-eqz v0, :cond_0

    const/4 v0, 0x1

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    :goto_0
    return v0
.end method

.method public B(Landroid/content/res/Configuration;)V
    .locals 1

    iget-boolean p1, p0, Landroidx/appcompat/widget/c;->s:Z

    if-nez p1, :cond_0

    iget-object p1, p0, Landroidx/appcompat/view/menu/a;->c:Landroid/content/Context;

    invoke-static {p1}, Le/a;->a(Landroid/content/Context;)Le/a;

    move-result-object p1

    invoke-virtual {p1}, Le/a;->c()I

    move-result p1

    iput p1, p0, Landroidx/appcompat/widget/c;->r:I

    :cond_0
    iget-object p1, p0, Landroidx/appcompat/view/menu/a;->d:Landroidx/appcompat/view/menu/d;

    if-eqz p1, :cond_1

    const/4 v0, 0x1

    invoke-virtual {p1, v0}, Landroidx/appcompat/view/menu/d;->G(Z)V

    :cond_1
    return-void
.end method

.method public C(Z)V
    .locals 0

    iput-boolean p1, p0, Landroidx/appcompat/widget/c;->v:Z

    return-void
.end method

.method public D(Landroidx/appcompat/widget/ActionMenuView;)V
    .locals 1

    iput-object p1, p0, Landroidx/appcompat/view/menu/a;->j:Landroidx/appcompat/view/menu/i;

    iget-object v0, p0, Landroidx/appcompat/view/menu/a;->d:Landroidx/appcompat/view/menu/d;

    invoke-virtual {p1, v0}, Landroidx/appcompat/widget/ActionMenuView;->E(Landroidx/appcompat/view/menu/d;)V

    return-void
.end method

.method public E(Landroid/graphics/drawable/Drawable;)V
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    if-eqz v0, :cond_0

    invoke-virtual {v0, p1}, Landroidx/appcompat/widget/k;->setImageDrawable(Landroid/graphics/drawable/Drawable;)V

    goto :goto_0

    :cond_0
    const/4 v0, 0x1

    iput-boolean v0, p0, Landroidx/appcompat/widget/c;->m:Z

    iput-object p1, p0, Landroidx/appcompat/widget/c;->l:Landroid/graphics/drawable/Drawable;

    :goto_0
    return-void
.end method

.method public F(Z)V
    .locals 0

    iput-boolean p1, p0, Landroidx/appcompat/widget/c;->n:Z

    const/4 p1, 0x1

    iput-boolean p1, p0, Landroidx/appcompat/widget/c;->o:Z

    return-void
.end method

.method public G()Z
    .locals 7

    iget-boolean v0, p0, Landroidx/appcompat/widget/c;->n:Z

    if-eqz v0, :cond_0

    invoke-virtual {p0}, Landroidx/appcompat/widget/c;->A()Z

    move-result v0

    if-nez v0, :cond_0

    iget-object v0, p0, Landroidx/appcompat/view/menu/a;->d:Landroidx/appcompat/view/menu/d;

    if-eqz v0, :cond_0

    iget-object v1, p0, Landroidx/appcompat/view/menu/a;->j:Landroidx/appcompat/view/menu/i;

    if-eqz v1, :cond_0

    iget-object v1, p0, Landroidx/appcompat/widget/c;->B:Landroidx/appcompat/widget/c$c;

    if-nez v1, :cond_0

    invoke-virtual {v0}, Landroidx/appcompat/view/menu/d;->v()Ljava/util/ArrayList;

    move-result-object v0

    invoke-virtual {v0}, Ljava/util/ArrayList;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_0

    new-instance v0, Landroidx/appcompat/widget/c$e;

    iget-object v3, p0, Landroidx/appcompat/view/menu/a;->c:Landroid/content/Context;

    iget-object v4, p0, Landroidx/appcompat/view/menu/a;->d:Landroidx/appcompat/view/menu/d;

    iget-object v5, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    const/4 v6, 0x1

    move-object v1, v0

    move-object v2, p0

    invoke-direct/range {v1 .. v6}, Landroidx/appcompat/widget/c$e;-><init>(Landroidx/appcompat/widget/c;Landroid/content/Context;Landroidx/appcompat/view/menu/d;Landroid/view/View;Z)V

    new-instance v1, Landroidx/appcompat/widget/c$c;

    invoke-direct {v1, p0, v0}, Landroidx/appcompat/widget/c$c;-><init>(Landroidx/appcompat/widget/c;Landroidx/appcompat/widget/c$e;)V

    iput-object v1, p0, Landroidx/appcompat/widget/c;->B:Landroidx/appcompat/widget/c$c;

    iget-object v0, p0, Landroidx/appcompat/view/menu/a;->j:Landroidx/appcompat/view/menu/i;

    check-cast v0, Landroid/view/View;

    invoke-virtual {v0, v1}, Landroid/view/View;->post(Ljava/lang/Runnable;)Z

    const/4 v0, 0x0

    invoke-super {p0, v0}, Landroidx/appcompat/view/menu/a;->g(Landroidx/appcompat/view/menu/k;)Z

    const/4 v0, 0x1

    return v0

    :cond_0
    const/4 v0, 0x0

    return v0
.end method

.method public a(Landroidx/appcompat/view/menu/d;Z)V
    .locals 0

    invoke-virtual {p0}, Landroidx/appcompat/widget/c;->v()Z

    invoke-super {p0, p1, p2}, Landroidx/appcompat/view/menu/a;->a(Landroidx/appcompat/view/menu/d;Z)V

    return-void
.end method

.method public c(Landroidx/appcompat/view/menu/e;Landroidx/appcompat/view/menu/i$a;)V
    .locals 1

    const/4 v0, 0x0

    invoke-interface {p2, p1, v0}, Landroidx/appcompat/view/menu/i$a;->d(Landroidx/appcompat/view/menu/e;I)V

    iget-object p1, p0, Landroidx/appcompat/view/menu/a;->j:Landroidx/appcompat/view/menu/i;

    check-cast p1, Landroidx/appcompat/widget/ActionMenuView;

    check-cast p2, Landroidx/appcompat/view/menu/ActionMenuItemView;

    invoke-virtual {p2, p1}, Landroidx/appcompat/view/menu/ActionMenuItemView;->setItemInvoker(Landroidx/appcompat/view/menu/d$b;)V

    iget-object p1, p0, Landroidx/appcompat/widget/c;->C:Landroidx/appcompat/widget/c$b;

    if-nez p1, :cond_0

    new-instance p1, Landroidx/appcompat/widget/c$b;

    invoke-direct {p1, p0}, Landroidx/appcompat/widget/c$b;-><init>(Landroidx/appcompat/widget/c;)V

    iput-object p1, p0, Landroidx/appcompat/widget/c;->C:Landroidx/appcompat/widget/c$b;

    :cond_0
    iget-object p1, p0, Landroidx/appcompat/widget/c;->C:Landroidx/appcompat/widget/c$b;

    invoke-virtual {p2, p1}, Landroidx/appcompat/view/menu/ActionMenuItemView;->setPopupCallback(Landroidx/appcompat/view/menu/ActionMenuItemView$b;)V

    return-void
.end method

.method public g(Landroidx/appcompat/view/menu/k;)Z
    .locals 7

    invoke-virtual {p1}, Landroidx/appcompat/view/menu/d;->hasVisibleItems()Z

    move-result v0

    const/4 v1, 0x0

    if-nez v0, :cond_0

    return v1

    :cond_0
    move-object v0, p1

    :goto_0
    invoke-virtual {v0}, Landroidx/appcompat/view/menu/k;->W()Landroid/view/Menu;

    move-result-object v2

    iget-object v3, p0, Landroidx/appcompat/view/menu/a;->d:Landroidx/appcompat/view/menu/d;

    if-eq v2, v3, :cond_1

    invoke-virtual {v0}, Landroidx/appcompat/view/menu/k;->W()Landroid/view/Menu;

    move-result-object v0

    check-cast v0, Landroidx/appcompat/view/menu/k;

    goto :goto_0

    :cond_1
    invoke-virtual {v0}, Landroidx/appcompat/view/menu/k;->getItem()Landroid/view/MenuItem;

    move-result-object v0

    invoke-direct {p0, v0}, Landroidx/appcompat/widget/c;->w(Landroid/view/MenuItem;)Landroid/view/View;

    move-result-object v0

    if-nez v0, :cond_2

    return v1

    :cond_2
    invoke-virtual {p1}, Landroidx/appcompat/view/menu/k;->getItem()Landroid/view/MenuItem;

    move-result-object v2

    invoke-interface {v2}, Landroid/view/MenuItem;->getItemId()I

    move-result v2

    iput v2, p0, Landroidx/appcompat/widget/c;->E:I

    invoke-virtual {p1}, Landroidx/appcompat/view/menu/d;->size()I

    move-result v2

    move v3, v1

    :goto_1
    const/4 v4, 0x1

    if-ge v3, v2, :cond_4

    invoke-virtual {p1, v3}, Landroidx/appcompat/view/menu/d;->getItem(I)Landroid/view/MenuItem;

    move-result-object v5

    invoke-interface {v5}, Landroid/view/MenuItem;->isVisible()Z

    move-result v6

    if-eqz v6, :cond_3

    invoke-interface {v5}, Landroid/view/MenuItem;->getIcon()Landroid/graphics/drawable/Drawable;

    move-result-object v5

    if-eqz v5, :cond_3

    move v1, v4

    goto :goto_2

    :cond_3
    add-int/lit8 v3, v3, 0x1

    goto :goto_1

    :cond_4
    :goto_2
    new-instance v2, Landroidx/appcompat/widget/c$a;

    iget-object v3, p0, Landroidx/appcompat/view/menu/a;->c:Landroid/content/Context;

    invoke-direct {v2, p0, v3, p1, v0}, Landroidx/appcompat/widget/c$a;-><init>(Landroidx/appcompat/widget/c;Landroid/content/Context;Landroidx/appcompat/view/menu/k;Landroid/view/View;)V

    iput-object v2, p0, Landroidx/appcompat/widget/c;->A:Landroidx/appcompat/widget/c$a;

    invoke-virtual {v2, v1}, Landroidx/appcompat/view/menu/g;->g(Z)V

    iget-object v0, p0, Landroidx/appcompat/widget/c;->A:Landroidx/appcompat/widget/c$a;

    invoke-virtual {v0}, Landroidx/appcompat/view/menu/g;->k()V

    invoke-super {p0, p1}, Landroidx/appcompat/view/menu/a;->g(Landroidx/appcompat/view/menu/k;)Z

    return v4
.end method

.method public h()Z
    .locals 19

    move-object/from16 v0, p0

    iget-object v1, v0, Landroidx/appcompat/view/menu/a;->d:Landroidx/appcompat/view/menu/d;

    const/4 v2, 0x0

    if-eqz v1, :cond_0

    invoke-virtual {v1}, Landroidx/appcompat/view/menu/d;->A()Ljava/util/ArrayList;

    move-result-object v1

    invoke-virtual {v1}, Ljava/util/ArrayList;->size()I

    move-result v3

    goto :goto_0

    :cond_0
    const/4 v1, 0x0

    move v3, v2

    :goto_0
    iget v4, v0, Landroidx/appcompat/widget/c;->r:I

    iget v5, v0, Landroidx/appcompat/widget/c;->q:I

    invoke-static {v2, v2}, Landroid/view/View$MeasureSpec;->makeMeasureSpec(II)I

    move-result v6

    iget-object v7, v0, Landroidx/appcompat/view/menu/a;->j:Landroidx/appcompat/view/menu/i;

    check-cast v7, Landroid/view/ViewGroup;

    move v8, v2

    move v9, v8

    move v10, v9

    move v11, v10

    :goto_1
    if-ge v8, v3, :cond_4

    invoke-virtual {v1, v8}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v13

    check-cast v13, Landroidx/appcompat/view/menu/e;

    invoke-virtual {v13}, Landroidx/appcompat/view/menu/e;->o()Z

    move-result v14

    if-eqz v14, :cond_1

    add-int/lit8 v10, v10, 0x1

    goto :goto_2

    :cond_1
    invoke-virtual {v13}, Landroidx/appcompat/view/menu/e;->n()Z

    move-result v14

    if-eqz v14, :cond_2

    add-int/lit8 v11, v11, 0x1

    goto :goto_2

    :cond_2
    const/4 v9, 0x1

    :goto_2
    iget-boolean v12, v0, Landroidx/appcompat/widget/c;->v:Z

    if-eqz v12, :cond_3

    invoke-virtual {v13}, Landroidx/appcompat/view/menu/e;->isActionViewExpanded()Z

    move-result v12

    if-eqz v12, :cond_3

    move v4, v2

    :cond_3
    add-int/lit8 v8, v8, 0x1

    goto :goto_1

    :cond_4
    iget-boolean v8, v0, Landroidx/appcompat/widget/c;->n:Z

    if-eqz v8, :cond_6

    if-nez v9, :cond_5

    add-int/2addr v11, v10

    if-le v11, v4, :cond_6

    :cond_5
    add-int/lit8 v4, v4, -0x1

    :cond_6
    sub-int/2addr v4, v10

    iget-object v8, v0, Landroidx/appcompat/widget/c;->x:Landroid/util/SparseBooleanArray;

    invoke-virtual {v8}, Landroid/util/SparseBooleanArray;->clear()V

    iget-boolean v9, v0, Landroidx/appcompat/widget/c;->t:Z

    if-eqz v9, :cond_7

    iget v9, v0, Landroidx/appcompat/widget/c;->w:I

    div-int v10, v5, v9

    rem-int v11, v5, v9

    div-int/2addr v11, v10

    add-int/2addr v9, v11

    goto :goto_3

    :cond_7
    move v9, v2

    move v10, v9

    :goto_3
    move v11, v2

    move v13, v11

    :goto_4
    if-ge v11, v3, :cond_1d

    invoke-virtual {v1, v11}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v14

    check-cast v14, Landroidx/appcompat/view/menu/e;

    invoke-virtual {v14}, Landroidx/appcompat/view/menu/e;->o()Z

    move-result v15

    if-eqz v15, :cond_c

    iget-object v15, v0, Landroidx/appcompat/widget/c;->y:Landroid/view/View;

    invoke-virtual {v0, v14, v15, v7}, Landroidx/appcompat/widget/c;->n(Landroidx/appcompat/view/menu/e;Landroid/view/View;Landroid/view/ViewGroup;)Landroid/view/View;

    move-result-object v15

    iget-object v12, v0, Landroidx/appcompat/widget/c;->y:Landroid/view/View;

    if-nez v12, :cond_8

    iput-object v15, v0, Landroidx/appcompat/widget/c;->y:Landroid/view/View;

    :cond_8
    iget-boolean v12, v0, Landroidx/appcompat/widget/c;->t:Z

    if-eqz v12, :cond_9

    invoke-static {v15, v9, v10, v6, v2}, Landroidx/appcompat/widget/ActionMenuView;->G(Landroid/view/View;IIII)I

    move-result v12

    sub-int/2addr v10, v12

    goto :goto_5

    :cond_9
    invoke-virtual {v15, v6, v6}, Landroid/view/View;->measure(II)V

    :goto_5
    invoke-virtual {v15}, Landroid/view/View;->getMeasuredWidth()I

    move-result v12

    sub-int/2addr v5, v12

    if-nez v13, :cond_a

    move v13, v12

    :cond_a
    invoke-virtual {v14}, Landroidx/appcompat/view/menu/e;->getGroupId()I

    move-result v12

    const/4 v15, 0x1

    if-eqz v12, :cond_b

    invoke-virtual {v8, v12, v15}, Landroid/util/SparseBooleanArray;->put(IZ)V

    :cond_b
    invoke-virtual {v14, v15}, Landroidx/appcompat/view/menu/e;->u(Z)V

    move v0, v2

    move/from16 v17, v3

    goto/16 :goto_d

    :cond_c
    invoke-virtual {v14}, Landroidx/appcompat/view/menu/e;->n()Z

    move-result v12

    if-eqz v12, :cond_1c

    invoke-virtual {v14}, Landroidx/appcompat/view/menu/e;->getGroupId()I

    move-result v12

    invoke-virtual {v8, v12}, Landroid/util/SparseBooleanArray;->get(I)Z

    move-result v15

    if-gtz v4, :cond_d

    if-eqz v15, :cond_f

    :cond_d
    if-lez v5, :cond_f

    iget-boolean v2, v0, Landroidx/appcompat/widget/c;->t:Z

    if-eqz v2, :cond_e

    if-lez v10, :cond_f

    :cond_e
    const/4 v2, 0x1

    goto :goto_6

    :cond_f
    const/4 v2, 0x0

    :goto_6
    move/from16 v16, v2

    if-eqz v2, :cond_16

    iget-object v2, v0, Landroidx/appcompat/widget/c;->y:Landroid/view/View;

    invoke-virtual {v0, v14, v2, v7}, Landroidx/appcompat/widget/c;->n(Landroidx/appcompat/view/menu/e;Landroid/view/View;Landroid/view/ViewGroup;)Landroid/view/View;

    move-result-object v2

    move/from16 v17, v3

    iget-object v3, v0, Landroidx/appcompat/widget/c;->y:Landroid/view/View;

    if-nez v3, :cond_10

    iput-object v2, v0, Landroidx/appcompat/widget/c;->y:Landroid/view/View;

    :cond_10
    iget-boolean v3, v0, Landroidx/appcompat/widget/c;->t:Z

    if-eqz v3, :cond_11

    const/4 v3, 0x0

    invoke-static {v2, v9, v10, v6, v3}, Landroidx/appcompat/widget/ActionMenuView;->G(Landroid/view/View;IIII)I

    move-result v18

    sub-int v10, v10, v18

    if-nez v18, :cond_12

    const/16 v16, 0x0

    goto :goto_7

    :cond_11
    invoke-virtual {v2, v6, v6}, Landroid/view/View;->measure(II)V

    :cond_12
    :goto_7
    invoke-virtual {v2}, Landroid/view/View;->getMeasuredWidth()I

    move-result v2

    sub-int/2addr v5, v2

    if-nez v13, :cond_13

    move v13, v2

    :cond_13
    iget-boolean v2, v0, Landroidx/appcompat/widget/c;->t:Z

    if-eqz v2, :cond_14

    if-ltz v5, :cond_15

    goto :goto_8

    :cond_14
    add-int v2, v5, v13

    if-lez v2, :cond_15

    :goto_8
    const/4 v2, 0x1

    goto :goto_9

    :cond_15
    const/4 v2, 0x0

    :goto_9
    and-int v2, v16, v2

    goto :goto_a

    :cond_16
    move/from16 v17, v3

    :goto_a
    if-eqz v2, :cond_17

    if-eqz v12, :cond_17

    const/4 v3, 0x1

    invoke-virtual {v8, v12, v3}, Landroid/util/SparseBooleanArray;->put(IZ)V

    goto :goto_c

    :cond_17
    if-eqz v15, :cond_1a

    const/4 v3, 0x0

    invoke-virtual {v8, v12, v3}, Landroid/util/SparseBooleanArray;->put(IZ)V

    const/4 v3, 0x0

    :goto_b
    if-ge v3, v11, :cond_1a

    invoke-virtual {v1, v3}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v15

    check-cast v15, Landroidx/appcompat/view/menu/e;

    invoke-virtual {v15}, Landroidx/appcompat/view/menu/e;->getGroupId()I

    move-result v0

    if-ne v0, v12, :cond_19

    invoke-virtual {v15}, Landroidx/appcompat/view/menu/e;->l()Z

    move-result v0

    if-eqz v0, :cond_18

    add-int/lit8 v4, v4, 0x1

    :cond_18
    const/4 v0, 0x0

    invoke-virtual {v15, v0}, Landroidx/appcompat/view/menu/e;->u(Z)V

    :cond_19
    add-int/lit8 v3, v3, 0x1

    move-object/from16 v0, p0

    goto :goto_b

    :cond_1a
    :goto_c
    if-eqz v2, :cond_1b

    add-int/lit8 v4, v4, -0x1

    :cond_1b
    invoke-virtual {v14, v2}, Landroidx/appcompat/view/menu/e;->u(Z)V

    const/4 v0, 0x0

    goto :goto_d

    :cond_1c
    move v0, v2

    move/from16 v17, v3

    invoke-virtual {v14, v0}, Landroidx/appcompat/view/menu/e;->u(Z)V

    :goto_d
    add-int/lit8 v11, v11, 0x1

    move v2, v0

    move/from16 v3, v17

    move-object/from16 v0, p0

    goto/16 :goto_4

    :cond_1d
    const/4 v2, 0x1

    return v2
.end method

.method public i(Landroid/view/ViewGroup;I)Z
    .locals 2

    invoke-virtual {p1, p2}, Landroid/view/ViewGroup;->getChildAt(I)Landroid/view/View;

    move-result-object v0

    iget-object v1, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    if-ne v0, v1, :cond_0

    const/4 p1, 0x0

    return p1

    :cond_0
    invoke-super {p0, p1, p2}, Landroidx/appcompat/view/menu/a;->i(Landroid/view/ViewGroup;I)Z

    move-result p1

    return p1
.end method

.method public j(Z)V
    .locals 4

    invoke-super {p0, p1}, Landroidx/appcompat/view/menu/a;->j(Z)V

    iget-object p1, p0, Landroidx/appcompat/view/menu/a;->j:Landroidx/appcompat/view/menu/i;

    check-cast p1, Landroid/view/View;

    invoke-virtual {p1}, Landroid/view/View;->requestLayout()V

    iget-object p1, p0, Landroidx/appcompat/view/menu/a;->d:Landroidx/appcompat/view/menu/d;

    const/4 v0, 0x0

    if-eqz p1, :cond_1

    invoke-virtual {p1}, Landroidx/appcompat/view/menu/d;->r()Ljava/util/ArrayList;

    move-result-object p1

    invoke-virtual {p1}, Ljava/util/ArrayList;->size()I

    move-result v1

    move v2, v0

    :goto_0
    if-ge v2, v1, :cond_1

    invoke-virtual {p1, v2}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Landroidx/appcompat/view/menu/e;

    invoke-virtual {v3}, Landroidx/appcompat/view/menu/e;->a()Lq/b;

    move-result-object v3

    if-eqz v3, :cond_0

    invoke-virtual {v3, p0}, Lq/b;->i(Lq/b$a;)V

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_1
    iget-object p1, p0, Landroidx/appcompat/view/menu/a;->d:Landroidx/appcompat/view/menu/d;

    if-eqz p1, :cond_2

    invoke-virtual {p1}, Landroidx/appcompat/view/menu/d;->v()Ljava/util/ArrayList;

    move-result-object p1

    goto :goto_1

    :cond_2
    const/4 p1, 0x0

    :goto_1
    iget-boolean v1, p0, Landroidx/appcompat/widget/c;->n:Z

    if-eqz v1, :cond_4

    if-eqz p1, :cond_4

    invoke-virtual {p1}, Ljava/util/ArrayList;->size()I

    move-result v1

    const/4 v2, 0x1

    if-ne v1, v2, :cond_3

    invoke-virtual {p1, v0}, Ljava/util/ArrayList;->get(I)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroidx/appcompat/view/menu/e;

    invoke-virtual {p1}, Landroidx/appcompat/view/menu/e;->isActionViewExpanded()Z

    move-result p1

    xor-int/lit8 v0, p1, 0x1

    goto :goto_2

    :cond_3
    if-lez v1, :cond_4

    move v0, v2

    :cond_4
    :goto_2
    iget-object p1, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    if-eqz v0, :cond_7

    if-nez p1, :cond_5

    new-instance p1, Landroidx/appcompat/widget/c$d;

    iget-object v0, p0, Landroidx/appcompat/view/menu/a;->b:Landroid/content/Context;

    invoke-direct {p1, p0, v0}, Landroidx/appcompat/widget/c$d;-><init>(Landroidx/appcompat/widget/c;Landroid/content/Context;)V

    iput-object p1, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    :cond_5
    iget-object p1, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    invoke-virtual {p1}, Landroid/widget/ImageView;->getParent()Landroid/view/ViewParent;

    move-result-object p1

    check-cast p1, Landroid/view/ViewGroup;

    iget-object v0, p0, Landroidx/appcompat/view/menu/a;->j:Landroidx/appcompat/view/menu/i;

    if-eq p1, v0, :cond_8

    if-eqz p1, :cond_6

    iget-object v0, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    invoke-virtual {p1, v0}, Landroid/view/ViewGroup;->removeView(Landroid/view/View;)V

    :cond_6
    iget-object p1, p0, Landroidx/appcompat/view/menu/a;->j:Landroidx/appcompat/view/menu/i;

    check-cast p1, Landroidx/appcompat/widget/ActionMenuView;

    iget-object v0, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    invoke-virtual {p1}, Landroidx/appcompat/widget/ActionMenuView;->C()Landroidx/appcompat/widget/ActionMenuView$c;

    move-result-object v1

    invoke-virtual {p1, v0, v1}, Landroid/view/ViewGroup;->addView(Landroid/view/View;Landroid/view/ViewGroup$LayoutParams;)V

    goto :goto_3

    :cond_7
    if-eqz p1, :cond_8

    invoke-virtual {p1}, Landroid/widget/ImageView;->getParent()Landroid/view/ViewParent;

    move-result-object p1

    iget-object v0, p0, Landroidx/appcompat/view/menu/a;->j:Landroidx/appcompat/view/menu/i;

    if-ne p1, v0, :cond_8

    check-cast v0, Landroid/view/ViewGroup;

    iget-object p1, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    invoke-virtual {v0, p1}, Landroid/view/ViewGroup;->removeView(Landroid/view/View;)V

    :cond_8
    :goto_3
    iget-object p1, p0, Landroidx/appcompat/view/menu/a;->j:Landroidx/appcompat/view/menu/i;

    check-cast p1, Landroidx/appcompat/widget/ActionMenuView;

    iget-boolean v0, p0, Landroidx/appcompat/widget/c;->n:Z

    invoke-virtual {p1, v0}, Landroidx/appcompat/widget/ActionMenuView;->setOverflowReserved(Z)V

    return-void
.end method

.method public k(Landroid/content/Context;Landroidx/appcompat/view/menu/d;)V
    .locals 4

    invoke-super {p0, p1, p2}, Landroidx/appcompat/view/menu/a;->k(Landroid/content/Context;Landroidx/appcompat/view/menu/d;)V

    invoke-virtual {p1}, Landroid/content/Context;->getResources()Landroid/content/res/Resources;

    move-result-object p2

    invoke-static {p1}, Le/a;->a(Landroid/content/Context;)Le/a;

    move-result-object p1

    iget-boolean v0, p0, Landroidx/appcompat/widget/c;->o:Z

    if-nez v0, :cond_0

    invoke-virtual {p1}, Le/a;->g()Z

    move-result v0

    iput-boolean v0, p0, Landroidx/appcompat/widget/c;->n:Z

    :cond_0
    iget-boolean v0, p0, Landroidx/appcompat/widget/c;->u:Z

    if-nez v0, :cond_1

    invoke-virtual {p1}, Le/a;->b()I

    move-result v0

    iput v0, p0, Landroidx/appcompat/widget/c;->p:I

    :cond_1
    iget-boolean v0, p0, Landroidx/appcompat/widget/c;->s:Z

    if-nez v0, :cond_2

    invoke-virtual {p1}, Le/a;->c()I

    move-result p1

    iput p1, p0, Landroidx/appcompat/widget/c;->r:I

    :cond_2
    iget p1, p0, Landroidx/appcompat/widget/c;->p:I

    iget-boolean v0, p0, Landroidx/appcompat/widget/c;->n:Z

    const/4 v1, 0x0

    if-eqz v0, :cond_5

    iget-object v0, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    if-nez v0, :cond_4

    new-instance v0, Landroidx/appcompat/widget/c$d;

    iget-object v2, p0, Landroidx/appcompat/view/menu/a;->b:Landroid/content/Context;

    invoke-direct {v0, p0, v2}, Landroidx/appcompat/widget/c$d;-><init>(Landroidx/appcompat/widget/c;Landroid/content/Context;)V

    iput-object v0, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    iget-boolean v2, p0, Landroidx/appcompat/widget/c;->m:Z

    const/4 v3, 0x0

    if-eqz v2, :cond_3

    iget-object v2, p0, Landroidx/appcompat/widget/c;->l:Landroid/graphics/drawable/Drawable;

    invoke-virtual {v0, v2}, Landroidx/appcompat/widget/k;->setImageDrawable(Landroid/graphics/drawable/Drawable;)V

    iput-object v1, p0, Landroidx/appcompat/widget/c;->l:Landroid/graphics/drawable/Drawable;

    iput-boolean v3, p0, Landroidx/appcompat/widget/c;->m:Z

    :cond_3
    invoke-static {v3, v3}, Landroid/view/View$MeasureSpec;->makeMeasureSpec(II)I

    move-result v0

    iget-object v2, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    invoke-virtual {v2, v0, v0}, Landroid/widget/ImageView;->measure(II)V

    :cond_4
    iget-object v0, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    invoke-virtual {v0}, Landroid/widget/ImageView;->getMeasuredWidth()I

    move-result v0

    sub-int/2addr p1, v0

    goto :goto_0

    :cond_5
    iput-object v1, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    :goto_0
    iput p1, p0, Landroidx/appcompat/widget/c;->q:I

    const/high16 p1, 0x42600000    # 56.0f

    invoke-virtual {p2}, Landroid/content/res/Resources;->getDisplayMetrics()Landroid/util/DisplayMetrics;

    move-result-object p2

    iget p2, p2, Landroid/util/DisplayMetrics;->density:F

    mul-float/2addr p2, p1

    float-to-int p1, p2

    iput p1, p0, Landroidx/appcompat/widget/c;->w:I

    iput-object v1, p0, Landroidx/appcompat/widget/c;->y:Landroid/view/View;

    return-void
.end method

.method public n(Landroidx/appcompat/view/menu/e;Landroid/view/View;Landroid/view/ViewGroup;)Landroid/view/View;
    .locals 2

    invoke-virtual {p1}, Landroidx/appcompat/view/menu/e;->getActionView()Landroid/view/View;

    move-result-object v0

    if-eqz v0, :cond_0

    invoke-virtual {p1}, Landroidx/appcompat/view/menu/e;->j()Z

    move-result v1

    if-eqz v1, :cond_1

    :cond_0
    invoke-super {p0, p1, p2, p3}, Landroidx/appcompat/view/menu/a;->n(Landroidx/appcompat/view/menu/e;Landroid/view/View;Landroid/view/ViewGroup;)Landroid/view/View;

    move-result-object v0

    :cond_1
    invoke-virtual {p1}, Landroidx/appcompat/view/menu/e;->isActionViewExpanded()Z

    move-result p1

    if-eqz p1, :cond_2

    const/16 p1, 0x8

    goto :goto_0

    :cond_2
    const/4 p1, 0x0

    :goto_0
    invoke-virtual {v0, p1}, Landroid/view/View;->setVisibility(I)V

    check-cast p3, Landroidx/appcompat/widget/ActionMenuView;

    invoke-virtual {v0}, Landroid/view/View;->getLayoutParams()Landroid/view/ViewGroup$LayoutParams;

    move-result-object p1

    invoke-virtual {p3, p1}, Landroidx/appcompat/widget/ActionMenuView;->checkLayoutParams(Landroid/view/ViewGroup$LayoutParams;)Z

    move-result p2

    if-nez p2, :cond_3

    invoke-virtual {p3, p1}, Landroidx/appcompat/widget/ActionMenuView;->B(Landroid/view/ViewGroup$LayoutParams;)Landroidx/appcompat/widget/ActionMenuView$c;

    move-result-object p1

    invoke-virtual {v0, p1}, Landroid/view/View;->setLayoutParams(Landroid/view/ViewGroup$LayoutParams;)V

    :cond_3
    return-object v0
.end method

.method public o(ILandroidx/appcompat/view/menu/e;)Z
    .locals 0

    invoke-virtual {p2}, Landroidx/appcompat/view/menu/e;->l()Z

    move-result p1

    return p1
.end method

.method public v()Z
    .locals 2

    invoke-virtual {p0}, Landroidx/appcompat/widget/c;->y()Z

    move-result v0

    invoke-virtual {p0}, Landroidx/appcompat/widget/c;->z()Z

    move-result v1

    or-int/2addr v0, v1

    return v0
.end method

.method public x()Landroid/graphics/drawable/Drawable;
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/c;->k:Landroidx/appcompat/widget/c$d;

    if-eqz v0, :cond_0

    invoke-virtual {v0}, Landroid/widget/ImageView;->getDrawable()Landroid/graphics/drawable/Drawable;

    move-result-object v0

    return-object v0

    :cond_0
    iget-boolean v0, p0, Landroidx/appcompat/widget/c;->m:Z

    if-eqz v0, :cond_1

    iget-object v0, p0, Landroidx/appcompat/widget/c;->l:Landroid/graphics/drawable/Drawable;

    return-object v0

    :cond_1
    const/4 v0, 0x0

    return-object v0
.end method

.method public y()Z
    .locals 3

    iget-object v0, p0, Landroidx/appcompat/widget/c;->B:Landroidx/appcompat/widget/c$c;

    const/4 v1, 0x1

    if-eqz v0, :cond_0

    iget-object v2, p0, Landroidx/appcompat/view/menu/a;->j:Landroidx/appcompat/view/menu/i;

    if-eqz v2, :cond_0

    check-cast v2, Landroid/view/View;

    invoke-virtual {v2, v0}, Landroid/view/View;->removeCallbacks(Ljava/lang/Runnable;)Z

    const/4 v0, 0x0

    iput-object v0, p0, Landroidx/appcompat/widget/c;->B:Landroidx/appcompat/widget/c$c;

    return v1

    :cond_0
    iget-object v0, p0, Landroidx/appcompat/widget/c;->z:Landroidx/appcompat/widget/c$e;

    if-eqz v0, :cond_1

    invoke-virtual {v0}, Landroidx/appcompat/view/menu/g;->b()V

    return v1

    :cond_1
    const/4 v0, 0x0

    return v0
.end method

.method public z()Z
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/c;->A:Landroidx/appcompat/widget/c$a;

    if-eqz v0, :cond_0

    invoke-virtual {v0}, Landroidx/appcompat/view/menu/g;->b()V

    const/4 v0, 0x1

    return v0

    :cond_0
    const/4 v0, 0x0

    return v0
.end method
