.class Le/d$b;
.super Ljava/lang/Object;
.source "SourceFile"


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Le/d;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x2
    name = "b"
.end annotation


# instance fields
.field A:Lq/b;

.field private B:Ljava/lang/CharSequence;

.field private C:Ljava/lang/CharSequence;

.field private D:Landroid/content/res/ColorStateList;

.field private E:Landroid/graphics/PorterDuff$Mode;

.field final synthetic F:Le/d;

.field private a:Landroid/view/Menu;

.field private b:I

.field private c:I

.field private d:I

.field private e:I

.field private f:Z

.field private g:Z

.field private h:Z

.field private i:I

.field private j:I

.field private k:Ljava/lang/CharSequence;

.field private l:Ljava/lang/CharSequence;

.field private m:I

.field private n:C

.field private o:I

.field private p:C

.field private q:I

.field private r:I

.field private s:Z

.field private t:Z

.field private u:Z

.field private v:I

.field private w:I

.field private x:Ljava/lang/String;

.field private y:Ljava/lang/String;

.field private z:Ljava/lang/String;


# direct methods
.method public constructor <init>(Le/d;Landroid/view/Menu;)V
    .locals 0

    iput-object p1, p0, Le/d$b;->F:Le/d;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 p1, 0x0

    iput-object p1, p0, Le/d$b;->D:Landroid/content/res/ColorStateList;

    iput-object p1, p0, Le/d$b;->E:Landroid/graphics/PorterDuff$Mode;

    iput-object p2, p0, Le/d$b;->a:Landroid/view/Menu;

    invoke-virtual {p0}, Le/d$b;->h()V

    return-void
.end method

.method private c(Ljava/lang/String;)C
    .locals 1

    const/4 v0, 0x0

    if-nez p1, :cond_0

    return v0

    :cond_0
    invoke-virtual {p1, v0}, Ljava/lang/String;->charAt(I)C

    move-result p1

    return p1
.end method

.method private e(Ljava/lang/String;[Ljava/lang/Class;[Ljava/lang/Object;)Ljava/lang/Object;
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "<T:",
            "Ljava/lang/Object;",
            ">(",
            "Ljava/lang/String;",
            "[",
            "Ljava/lang/Class<",
            "*>;[",
            "Ljava/lang/Object;",
            ")TT;"
        }
    .end annotation

    :try_start_0
    iget-object v0, p0, Le/d$b;->F:Le/d;

    iget-object v0, v0, Le/d;->c:Landroid/content/Context;

    invoke-virtual {v0}, Landroid/content/Context;->getClassLoader()Ljava/lang/ClassLoader;

    move-result-object v0

    invoke-virtual {v0, p1}, Ljava/lang/ClassLoader;->loadClass(Ljava/lang/String;)Ljava/lang/Class;

    move-result-object v0

    invoke-virtual {v0, p2}, Ljava/lang/Class;->getConstructor([Ljava/lang/Class;)Ljava/lang/reflect/Constructor;

    move-result-object p2

    const/4 v0, 0x1

    invoke-virtual {p2, v0}, Ljava/lang/reflect/Constructor;->setAccessible(Z)V

    invoke-virtual {p2, p3}, Ljava/lang/reflect/Constructor;->newInstance([Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    return-object p1

    :catch_0
    move-exception p2

    new-instance p3, Ljava/lang/StringBuilder;

    invoke-direct {p3}, Ljava/lang/StringBuilder;-><init>()V

    const-string v0, "Cannot instantiate class: "

    invoke-virtual {p3, v0}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {p3, p1}, Ljava/lang/StringBuilder;->append(Ljava/lang/String;)Ljava/lang/StringBuilder;

    invoke-virtual {p3}, Ljava/lang/StringBuilder;->toString()Ljava/lang/String;

    move-result-object p1

    const-string p3, "SupportMenuInflater"

    invoke-static {p3, p1, p2}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    const/4 p1, 0x0

    return-object p1
.end method

.method private i(Landroid/view/MenuItem;)V
    .locals 5

    iget-boolean v0, p0, Le/d$b;->s:Z

    invoke-interface {p1, v0}, Landroid/view/MenuItem;->setChecked(Z)Landroid/view/MenuItem;

    move-result-object v0

    iget-boolean v1, p0, Le/d$b;->t:Z

    invoke-interface {v0, v1}, Landroid/view/MenuItem;->setVisible(Z)Landroid/view/MenuItem;

    move-result-object v0

    iget-boolean v1, p0, Le/d$b;->u:Z

    invoke-interface {v0, v1}, Landroid/view/MenuItem;->setEnabled(Z)Landroid/view/MenuItem;

    move-result-object v0

    iget v1, p0, Le/d$b;->r:I

    const/4 v2, 0x0

    const/4 v3, 0x1

    if-lt v1, v3, :cond_0

    move v1, v3

    goto :goto_0

    :cond_0
    move v1, v2

    :goto_0
    invoke-interface {v0, v1}, Landroid/view/MenuItem;->setCheckable(Z)Landroid/view/MenuItem;

    move-result-object v0

    iget-object v1, p0, Le/d$b;->l:Ljava/lang/CharSequence;

    invoke-interface {v0, v1}, Landroid/view/MenuItem;->setTitleCondensed(Ljava/lang/CharSequence;)Landroid/view/MenuItem;

    move-result-object v0

    iget v1, p0, Le/d$b;->m:I

    invoke-interface {v0, v1}, Landroid/view/MenuItem;->setIcon(I)Landroid/view/MenuItem;

    iget v0, p0, Le/d$b;->v:I

    if-ltz v0, :cond_1

    invoke-interface {p1, v0}, Landroid/view/MenuItem;->setShowAsAction(I)V

    :cond_1
    iget-object v0, p0, Le/d$b;->z:Ljava/lang/String;

    if-eqz v0, :cond_3

    iget-object v0, p0, Le/d$b;->F:Le/d;

    iget-object v0, v0, Le/d;->c:Landroid/content/Context;

    invoke-virtual {v0}, Landroid/content/Context;->isRestricted()Z

    move-result v0

    if-nez v0, :cond_2

    new-instance v0, Le/d$a;

    iget-object v1, p0, Le/d$b;->F:Le/d;

    invoke-virtual {v1}, Le/d;->b()Ljava/lang/Object;

    move-result-object v1

    iget-object v4, p0, Le/d$b;->z:Ljava/lang/String;

    invoke-direct {v0, v1, v4}, Le/d$a;-><init>(Ljava/lang/Object;Ljava/lang/String;)V

    invoke-interface {p1, v0}, Landroid/view/MenuItem;->setOnMenuItemClickListener(Landroid/view/MenuItem$OnMenuItemClickListener;)Landroid/view/MenuItem;

    goto :goto_1

    :cond_2
    new-instance p1, Ljava/lang/IllegalStateException;

    const-string v0, "The android:onClick attribute cannot be used within a restricted context"

    invoke-direct {p1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1

    :cond_3
    :goto_1
    instance-of v0, p1, Landroidx/appcompat/view/menu/e;

    if-eqz v0, :cond_4

    move-object v1, p1

    check-cast v1, Landroidx/appcompat/view/menu/e;

    :cond_4
    iget v1, p0, Le/d$b;->r:I

    const/4 v4, 0x2

    if-lt v1, v4, :cond_6

    if-eqz v0, :cond_5

    move-object v0, p1

    check-cast v0, Landroidx/appcompat/view/menu/e;

    invoke-virtual {v0, v3}, Landroidx/appcompat/view/menu/e;->t(Z)V

    goto :goto_2

    :cond_5
    instance-of v0, p1, Lf/d;

    if-eqz v0, :cond_6

    move-object v0, p1

    check-cast v0, Lf/d;

    invoke-virtual {v0, v3}, Lf/d;->i(Z)V

    :cond_6
    :goto_2
    iget-object v0, p0, Le/d$b;->x:Ljava/lang/String;

    if-eqz v0, :cond_7

    sget-object v1, Le/d;->e:[Ljava/lang/Class;

    iget-object v2, p0, Le/d$b;->F:Le/d;

    iget-object v2, v2, Le/d;->a:[Ljava/lang/Object;

    invoke-direct {p0, v0, v1, v2}, Le/d$b;->e(Ljava/lang/String;[Ljava/lang/Class;[Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Landroid/view/View;

    invoke-interface {p1, v0}, Landroid/view/MenuItem;->setActionView(Landroid/view/View;)Landroid/view/MenuItem;

    move v2, v3

    :cond_7
    iget v0, p0, Le/d$b;->w:I

    if-lez v0, :cond_9

    if-nez v2, :cond_8

    invoke-interface {p1, v0}, Landroid/view/MenuItem;->setActionView(I)Landroid/view/MenuItem;

    goto :goto_3

    :cond_8
    const-string v0, "SupportMenuInflater"

    const-string v1, "Ignoring attribute \'itemActionViewLayout\'. Action view already specified."

    invoke-static {v0, v1}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    :cond_9
    :goto_3
    iget-object v0, p0, Le/d$b;->A:Lq/b;

    if-eqz v0, :cond_a

    invoke-static {p1, v0}, Lq/e;->a(Landroid/view/MenuItem;Lq/b;)Landroid/view/MenuItem;

    :cond_a
    iget-object v0, p0, Le/d$b;->B:Ljava/lang/CharSequence;

    invoke-static {p1, v0}, Lq/e;->c(Landroid/view/MenuItem;Ljava/lang/CharSequence;)V

    iget-object v0, p0, Le/d$b;->C:Ljava/lang/CharSequence;

    invoke-static {p1, v0}, Lq/e;->g(Landroid/view/MenuItem;Ljava/lang/CharSequence;)V

    iget-char v0, p0, Le/d$b;->n:C

    iget v1, p0, Le/d$b;->o:I

    invoke-static {p1, v0, v1}, Lq/e;->b(Landroid/view/MenuItem;CI)V

    iget-char v0, p0, Le/d$b;->p:C

    iget v1, p0, Le/d$b;->q:I

    invoke-static {p1, v0, v1}, Lq/e;->f(Landroid/view/MenuItem;CI)V

    iget-object v0, p0, Le/d$b;->E:Landroid/graphics/PorterDuff$Mode;

    if-eqz v0, :cond_b

    invoke-static {p1, v0}, Lq/e;->e(Landroid/view/MenuItem;Landroid/graphics/PorterDuff$Mode;)V

    :cond_b
    iget-object v0, p0, Le/d$b;->D:Landroid/content/res/ColorStateList;

    if-eqz v0, :cond_c

    invoke-static {p1, v0}, Lq/e;->d(Landroid/view/MenuItem;Landroid/content/res/ColorStateList;)V

    :cond_c
    return-void
.end method


# virtual methods
.method public a()V
    .locals 5

    const/4 v0, 0x1

    iput-boolean v0, p0, Le/d$b;->h:Z

    iget-object v0, p0, Le/d$b;->a:Landroid/view/Menu;

    iget v1, p0, Le/d$b;->b:I

    iget v2, p0, Le/d$b;->i:I

    iget v3, p0, Le/d$b;->j:I

    iget-object v4, p0, Le/d$b;->k:Ljava/lang/CharSequence;

    invoke-interface {v0, v1, v2, v3, v4}, Landroid/view/Menu;->add(IIILjava/lang/CharSequence;)Landroid/view/MenuItem;

    move-result-object v0

    invoke-direct {p0, v0}, Le/d$b;->i(Landroid/view/MenuItem;)V

    return-void
.end method

.method public b()Landroid/view/SubMenu;
    .locals 5

    const/4 v0, 0x1

    iput-boolean v0, p0, Le/d$b;->h:Z

    iget-object v0, p0, Le/d$b;->a:Landroid/view/Menu;

    iget v1, p0, Le/d$b;->b:I

    iget v2, p0, Le/d$b;->i:I

    iget v3, p0, Le/d$b;->j:I

    iget-object v4, p0, Le/d$b;->k:Ljava/lang/CharSequence;

    invoke-interface {v0, v1, v2, v3, v4}, Landroid/view/Menu;->addSubMenu(IIILjava/lang/CharSequence;)Landroid/view/SubMenu;

    move-result-object v0

    invoke-interface {v0}, Landroid/view/SubMenu;->getItem()Landroid/view/MenuItem;

    move-result-object v1

    invoke-direct {p0, v1}, Le/d$b;->i(Landroid/view/MenuItem;)V

    return-object v0
.end method

.method public d()Z
    .locals 1

    iget-boolean v0, p0, Le/d$b;->h:Z

    return v0
.end method

.method public f(Landroid/util/AttributeSet;)V
    .locals 2

    iget-object v0, p0, Le/d$b;->F:Le/d;

    iget-object v0, v0, Le/d;->c:Landroid/content/Context;

    sget-object v1, La/j;->F0:[I

    invoke-virtual {v0, p1, v1}, Landroid/content/Context;->obtainStyledAttributes(Landroid/util/AttributeSet;[I)Landroid/content/res/TypedArray;

    move-result-object p1

    sget v0, La/j;->H0:I

    const/4 v1, 0x0

    invoke-virtual {p1, v0, v1}, Landroid/content/res/TypedArray;->getResourceId(II)I

    move-result v0

    iput v0, p0, Le/d$b;->b:I

    sget v0, La/j;->J0:I

    invoke-virtual {p1, v0, v1}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v0

    iput v0, p0, Le/d$b;->c:I

    sget v0, La/j;->K0:I

    invoke-virtual {p1, v0, v1}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v0

    iput v0, p0, Le/d$b;->d:I

    sget v0, La/j;->L0:I

    invoke-virtual {p1, v0, v1}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v0

    iput v0, p0, Le/d$b;->e:I

    sget v0, La/j;->I0:I

    const/4 v1, 0x1

    invoke-virtual {p1, v0, v1}, Landroid/content/res/TypedArray;->getBoolean(IZ)Z

    move-result v0

    iput-boolean v0, p0, Le/d$b;->f:Z

    sget v0, La/j;->G0:I

    invoke-virtual {p1, v0, v1}, Landroid/content/res/TypedArray;->getBoolean(IZ)Z

    move-result v0

    iput-boolean v0, p0, Le/d$b;->g:Z

    invoke-virtual {p1}, Landroid/content/res/TypedArray;->recycle()V

    return-void
.end method

.method public g(Landroid/util/AttributeSet;)V
    .locals 6

    iget-object v0, p0, Le/d$b;->F:Le/d;

    iget-object v0, v0, Le/d;->c:Landroid/content/Context;

    sget-object v1, La/j;->M0:[I

    invoke-virtual {v0, p1, v1}, Landroid/content/Context;->obtainStyledAttributes(Landroid/util/AttributeSet;[I)Landroid/content/res/TypedArray;

    move-result-object p1

    sget v0, La/j;->P0:I

    const/4 v1, 0x0

    invoke-virtual {p1, v0, v1}, Landroid/content/res/TypedArray;->getResourceId(II)I

    move-result v0

    iput v0, p0, Le/d$b;->i:I

    sget v0, La/j;->S0:I

    iget v2, p0, Le/d$b;->c:I

    invoke-virtual {p1, v0, v2}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v0

    sget v2, La/j;->T0:I

    iget v3, p0, Le/d$b;->d:I

    invoke-virtual {p1, v2, v3}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v2

    const/high16 v3, -0x10000

    and-int/2addr v0, v3

    const v3, 0xffff

    and-int/2addr v2, v3

    or-int/2addr v0, v2

    iput v0, p0, Le/d$b;->j:I

    sget v0, La/j;->U0:I

    invoke-virtual {p1, v0}, Landroid/content/res/TypedArray;->getText(I)Ljava/lang/CharSequence;

    move-result-object v0

    iput-object v0, p0, Le/d$b;->k:Ljava/lang/CharSequence;

    sget v0, La/j;->V0:I

    invoke-virtual {p1, v0}, Landroid/content/res/TypedArray;->getText(I)Ljava/lang/CharSequence;

    move-result-object v0

    iput-object v0, p0, Le/d$b;->l:Ljava/lang/CharSequence;

    sget v0, La/j;->N0:I

    invoke-virtual {p1, v0, v1}, Landroid/content/res/TypedArray;->getResourceId(II)I

    move-result v0

    iput v0, p0, Le/d$b;->m:I

    sget v0, La/j;->W0:I

    invoke-virtual {p1, v0}, Landroid/content/res/TypedArray;->getString(I)Ljava/lang/String;

    move-result-object v0

    invoke-direct {p0, v0}, Le/d$b;->c(Ljava/lang/String;)C

    move-result v0

    iput-char v0, p0, Le/d$b;->n:C

    sget v0, La/j;->d1:I

    const/16 v2, 0x1000

    invoke-virtual {p1, v0, v2}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v0

    iput v0, p0, Le/d$b;->o:I

    sget v0, La/j;->X0:I

    invoke-virtual {p1, v0}, Landroid/content/res/TypedArray;->getString(I)Ljava/lang/String;

    move-result-object v0

    invoke-direct {p0, v0}, Le/d$b;->c(Ljava/lang/String;)C

    move-result v0

    iput-char v0, p0, Le/d$b;->p:C

    sget v0, La/j;->h1:I

    invoke-virtual {p1, v0, v2}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v0

    iput v0, p0, Le/d$b;->q:I

    sget v0, La/j;->Y0:I

    invoke-virtual {p1, v0}, Landroid/content/res/TypedArray;->hasValue(I)Z

    move-result v2

    if-eqz v2, :cond_0

    invoke-virtual {p1, v0, v1}, Landroid/content/res/TypedArray;->getBoolean(IZ)Z

    move-result v0

    goto :goto_0

    :cond_0
    iget v0, p0, Le/d$b;->e:I

    :goto_0
    iput v0, p0, Le/d$b;->r:I

    sget v0, La/j;->Q0:I

    invoke-virtual {p1, v0, v1}, Landroid/content/res/TypedArray;->getBoolean(IZ)Z

    move-result v0

    iput-boolean v0, p0, Le/d$b;->s:Z

    sget v0, La/j;->R0:I

    iget-boolean v2, p0, Le/d$b;->f:Z

    invoke-virtual {p1, v0, v2}, Landroid/content/res/TypedArray;->getBoolean(IZ)Z

    move-result v0

    iput-boolean v0, p0, Le/d$b;->t:Z

    sget v0, La/j;->O0:I

    iget-boolean v2, p0, Le/d$b;->g:Z

    invoke-virtual {p1, v0, v2}, Landroid/content/res/TypedArray;->getBoolean(IZ)Z

    move-result v0

    iput-boolean v0, p0, Le/d$b;->u:Z

    sget v0, La/j;->i1:I

    const/4 v2, -0x1

    invoke-virtual {p1, v0, v2}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v0

    iput v0, p0, Le/d$b;->v:I

    sget v0, La/j;->Z0:I

    invoke-virtual {p1, v0}, Landroid/content/res/TypedArray;->getString(I)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Le/d$b;->z:Ljava/lang/String;

    sget v0, La/j;->a1:I

    invoke-virtual {p1, v0, v1}, Landroid/content/res/TypedArray;->getResourceId(II)I

    move-result v0

    iput v0, p0, Le/d$b;->w:I

    sget v0, La/j;->c1:I

    invoke-virtual {p1, v0}, Landroid/content/res/TypedArray;->getString(I)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Le/d$b;->x:Ljava/lang/String;

    sget v0, La/j;->b1:I

    invoke-virtual {p1, v0}, Landroid/content/res/TypedArray;->getString(I)Ljava/lang/String;

    move-result-object v0

    iput-object v0, p0, Le/d$b;->y:Ljava/lang/String;

    if-eqz v0, :cond_1

    const/4 v3, 0x1

    goto :goto_1

    :cond_1
    move v3, v1

    :goto_1
    const/4 v4, 0x0

    if-eqz v3, :cond_2

    iget v5, p0, Le/d$b;->w:I

    if-nez v5, :cond_2

    iget-object v5, p0, Le/d$b;->x:Ljava/lang/String;

    if-nez v5, :cond_2

    sget-object v3, Le/d;->f:[Ljava/lang/Class;

    iget-object v5, p0, Le/d$b;->F:Le/d;

    iget-object v5, v5, Le/d;->b:[Ljava/lang/Object;

    invoke-direct {p0, v0, v3, v5}, Le/d$b;->e(Ljava/lang/String;[Ljava/lang/Class;[Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lq/b;

    iput-object v0, p0, Le/d$b;->A:Lq/b;

    goto :goto_2

    :cond_2
    if-eqz v3, :cond_3

    const-string v0, "SupportMenuInflater"

    const-string v3, "Ignoring attribute \'actionProviderClass\'. Action view already specified."

    invoke-static {v0, v3}, Landroid/util/Log;->w(Ljava/lang/String;Ljava/lang/String;)I

    :cond_3
    iput-object v4, p0, Le/d$b;->A:Lq/b;

    :goto_2
    sget v0, La/j;->e1:I

    invoke-virtual {p1, v0}, Landroid/content/res/TypedArray;->getText(I)Ljava/lang/CharSequence;

    move-result-object v0

    iput-object v0, p0, Le/d$b;->B:Ljava/lang/CharSequence;

    sget v0, La/j;->j1:I

    invoke-virtual {p1, v0}, Landroid/content/res/TypedArray;->getText(I)Ljava/lang/CharSequence;

    move-result-object v0

    iput-object v0, p0, Le/d$b;->C:Ljava/lang/CharSequence;

    sget v0, La/j;->g1:I

    invoke-virtual {p1, v0}, Landroid/content/res/TypedArray;->hasValue(I)Z

    move-result v3

    if-eqz v3, :cond_4

    invoke-virtual {p1, v0, v2}, Landroid/content/res/TypedArray;->getInt(II)I

    move-result v0

    iget-object v2, p0, Le/d$b;->E:Landroid/graphics/PorterDuff$Mode;

    invoke-static {v0, v2}, Landroidx/appcompat/widget/r;->c(ILandroid/graphics/PorterDuff$Mode;)Landroid/graphics/PorterDuff$Mode;

    move-result-object v0

    iput-object v0, p0, Le/d$b;->E:Landroid/graphics/PorterDuff$Mode;

    goto :goto_3

    :cond_4
    iput-object v4, p0, Le/d$b;->E:Landroid/graphics/PorterDuff$Mode;

    :goto_3
    sget v0, La/j;->f1:I

    invoke-virtual {p1, v0}, Landroid/content/res/TypedArray;->hasValue(I)Z

    move-result v2

    if-eqz v2, :cond_5

    invoke-virtual {p1, v0}, Landroid/content/res/TypedArray;->getColorStateList(I)Landroid/content/res/ColorStateList;

    move-result-object v0

    iput-object v0, p0, Le/d$b;->D:Landroid/content/res/ColorStateList;

    goto :goto_4

    :cond_5
    iput-object v4, p0, Le/d$b;->D:Landroid/content/res/ColorStateList;

    :goto_4
    invoke-virtual {p1}, Landroid/content/res/TypedArray;->recycle()V

    iput-boolean v1, p0, Le/d$b;->h:Z

    return-void
.end method

.method public h()V
    .locals 1

    const/4 v0, 0x0

    iput v0, p0, Le/d$b;->b:I

    iput v0, p0, Le/d$b;->c:I

    iput v0, p0, Le/d$b;->d:I

    iput v0, p0, Le/d$b;->e:I

    const/4 v0, 0x1

    iput-boolean v0, p0, Le/d$b;->f:Z

    iput-boolean v0, p0, Le/d$b;->g:Z

    return-void
.end method
