.class Landroidx/appcompat/widget/n;
.super Ljava/lang/Object;
.source "SourceFile"


# instance fields
.field private final a:Landroid/widget/TextView;

.field private b:Landroidx/appcompat/widget/g0;

.field private c:Landroidx/appcompat/widget/g0;

.field private d:Landroidx/appcompat/widget/g0;

.field private e:Landroidx/appcompat/widget/g0;

.field private f:Landroidx/appcompat/widget/g0;

.field private g:Landroidx/appcompat/widget/g0;

.field private final h:Landroidx/appcompat/widget/p;

.field private i:I

.field private j:Landroid/graphics/Typeface;

.field private k:Z


# direct methods
.method constructor <init>(Landroid/widget/TextView;)V
    .locals 1

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    const/4 v0, 0x0

    iput v0, p0, Landroidx/appcompat/widget/n;->i:I

    iput-object p1, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    new-instance v0, Landroidx/appcompat/widget/p;

    invoke-direct {v0, p1}, Landroidx/appcompat/widget/p;-><init>(Landroid/widget/TextView;)V

    iput-object v0, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    return-void
.end method

.method private a(Landroid/graphics/drawable/Drawable;Landroidx/appcompat/widget/g0;)V
    .locals 1

    if-eqz p1, :cond_0

    if-eqz p2, :cond_0

    iget-object v0, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    invoke-virtual {v0}, Landroid/widget/TextView;->getDrawableState()[I

    move-result-object v0

    invoke-static {p1, p2, v0}, Landroidx/appcompat/widget/f;->A(Landroid/graphics/drawable/Drawable;Landroidx/appcompat/widget/g0;[I)V

    :cond_0
    return-void
.end method

.method private static d(Landroid/content/Context;Landroidx/appcompat/widget/f;I)Landroidx/appcompat/widget/g0;
    .locals 0

    invoke-virtual {p1, p0, p2}, Landroidx/appcompat/widget/f;->r(Landroid/content/Context;I)Landroid/content/res/ColorStateList;

    move-result-object p0

    if-eqz p0, :cond_0

    new-instance p1, Landroidx/appcompat/widget/g0;

    invoke-direct {p1}, Landroidx/appcompat/widget/g0;-><init>()V

    const/4 p2, 0x1

    iput-boolean p2, p1, Landroidx/appcompat/widget/g0;->d:Z

    iput-object p0, p1, Landroidx/appcompat/widget/g0;->a:Landroid/content/res/ColorStateList;

    return-object p1

    :cond_0
    const/4 p0, 0x0

    return-object p0
.end method

.method private t(IF)V
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v0, p1, p2}, Landroidx/appcompat/widget/p;->s(IF)V

    return-void
.end method

.method private u(Landroid/content/Context;Landroidx/appcompat/widget/i0;)V
    .locals 5

    sget v0, La/j;->a2:I

    iget v1, p0, Landroidx/appcompat/widget/n;->i:I

    invoke-virtual {p2, v0, v1}, Landroidx/appcompat/widget/i0;->i(II)I

    move-result v0

    iput v0, p0, Landroidx/appcompat/widget/n;->i:I

    sget v0, La/j;->b2:I

    invoke-virtual {p2, v0}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v1

    const/4 v2, 0x0

    const/4 v3, 0x1

    if-nez v1, :cond_5

    sget v1, La/j;->c2:I

    invoke-virtual {p2, v1}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v1

    if-eqz v1, :cond_0

    goto :goto_2

    :cond_0
    sget p1, La/j;->Z1:I

    invoke-virtual {p2, p1}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v0

    if-eqz v0, :cond_4

    iput-boolean v2, p0, Landroidx/appcompat/widget/n;->k:Z

    invoke-virtual {p2, p1, v3}, Landroidx/appcompat/widget/i0;->i(II)I

    move-result p1

    if-eq p1, v3, :cond_3

    const/4 p2, 0x2

    if-eq p1, p2, :cond_2

    const/4 p2, 0x3

    if-eq p1, p2, :cond_1

    goto :goto_1

    :cond_1
    sget-object p1, Landroid/graphics/Typeface;->MONOSPACE:Landroid/graphics/Typeface;

    goto :goto_0

    :cond_2
    sget-object p1, Landroid/graphics/Typeface;->SERIF:Landroid/graphics/Typeface;

    goto :goto_0

    :cond_3
    sget-object p1, Landroid/graphics/Typeface;->SANS_SERIF:Landroid/graphics/Typeface;

    :goto_0
    iput-object p1, p0, Landroidx/appcompat/widget/n;->j:Landroid/graphics/Typeface;

    :cond_4
    :goto_1
    return-void

    :cond_5
    :goto_2
    const/4 v1, 0x0

    iput-object v1, p0, Landroidx/appcompat/widget/n;->j:Landroid/graphics/Typeface;

    sget v1, La/j;->c2:I

    invoke-virtual {p2, v1}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v4

    if-eqz v4, :cond_6

    move v0, v1

    :cond_6
    invoke-virtual {p1}, Landroid/content/Context;->isRestricted()Z

    move-result p1

    if-nez p1, :cond_8

    new-instance p1, Ljava/lang/ref/WeakReference;

    iget-object v1, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    invoke-direct {p1, v1}, Ljava/lang/ref/WeakReference;-><init>(Ljava/lang/Object;)V

    new-instance v1, Landroidx/appcompat/widget/n$a;

    invoke-direct {v1, p0, p1}, Landroidx/appcompat/widget/n$a;-><init>(Landroidx/appcompat/widget/n;Ljava/lang/ref/WeakReference;)V

    :try_start_0
    iget p1, p0, Landroidx/appcompat/widget/n;->i:I

    invoke-virtual {p2, v0, p1, v1}, Landroidx/appcompat/widget/i0;->h(IILj/b$a;)Landroid/graphics/Typeface;

    move-result-object p1

    iput-object p1, p0, Landroidx/appcompat/widget/n;->j:Landroid/graphics/Typeface;

    if-nez p1, :cond_7

    move v2, v3

    :cond_7
    iput-boolean v2, p0, Landroidx/appcompat/widget/n;->k:Z
    :try_end_0
    .catch Ljava/lang/UnsupportedOperationException; {:try_start_0 .. :try_end_0} :catch_0
    .catch Landroid/content/res/Resources$NotFoundException; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    :cond_8
    iget-object p1, p0, Landroidx/appcompat/widget/n;->j:Landroid/graphics/Typeface;

    if-nez p1, :cond_9

    invoke-virtual {p2, v0}, Landroidx/appcompat/widget/i0;->m(I)Ljava/lang/String;

    move-result-object p1

    if-eqz p1, :cond_9

    iget p2, p0, Landroidx/appcompat/widget/n;->i:I

    invoke-static {p1, p2}, Landroid/graphics/Typeface;->create(Ljava/lang/String;I)Landroid/graphics/Typeface;

    move-result-object p1

    iput-object p1, p0, Landroidx/appcompat/widget/n;->j:Landroid/graphics/Typeface;

    :cond_9
    return-void
.end method


# virtual methods
.method b()V
    .locals 5

    iget-object v0, p0, Landroidx/appcompat/widget/n;->b:Landroidx/appcompat/widget/g0;

    const/4 v1, 0x2

    const/4 v2, 0x0

    if-nez v0, :cond_0

    iget-object v0, p0, Landroidx/appcompat/widget/n;->c:Landroidx/appcompat/widget/g0;

    if-nez v0, :cond_0

    iget-object v0, p0, Landroidx/appcompat/widget/n;->d:Landroidx/appcompat/widget/g0;

    if-nez v0, :cond_0

    iget-object v0, p0, Landroidx/appcompat/widget/n;->e:Landroidx/appcompat/widget/g0;

    if-eqz v0, :cond_1

    :cond_0
    iget-object v0, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    invoke-virtual {v0}, Landroid/widget/TextView;->getCompoundDrawables()[Landroid/graphics/drawable/Drawable;

    move-result-object v0

    aget-object v3, v0, v2

    iget-object v4, p0, Landroidx/appcompat/widget/n;->b:Landroidx/appcompat/widget/g0;

    invoke-direct {p0, v3, v4}, Landroidx/appcompat/widget/n;->a(Landroid/graphics/drawable/Drawable;Landroidx/appcompat/widget/g0;)V

    const/4 v3, 0x1

    aget-object v3, v0, v3

    iget-object v4, p0, Landroidx/appcompat/widget/n;->c:Landroidx/appcompat/widget/g0;

    invoke-direct {p0, v3, v4}, Landroidx/appcompat/widget/n;->a(Landroid/graphics/drawable/Drawable;Landroidx/appcompat/widget/g0;)V

    aget-object v3, v0, v1

    iget-object v4, p0, Landroidx/appcompat/widget/n;->d:Landroidx/appcompat/widget/g0;

    invoke-direct {p0, v3, v4}, Landroidx/appcompat/widget/n;->a(Landroid/graphics/drawable/Drawable;Landroidx/appcompat/widget/g0;)V

    const/4 v3, 0x3

    aget-object v0, v0, v3

    iget-object v3, p0, Landroidx/appcompat/widget/n;->e:Landroidx/appcompat/widget/g0;

    invoke-direct {p0, v0, v3}, Landroidx/appcompat/widget/n;->a(Landroid/graphics/drawable/Drawable;Landroidx/appcompat/widget/g0;)V

    :cond_1
    iget-object v0, p0, Landroidx/appcompat/widget/n;->f:Landroidx/appcompat/widget/g0;

    if-nez v0, :cond_2

    iget-object v0, p0, Landroidx/appcompat/widget/n;->g:Landroidx/appcompat/widget/g0;

    if-eqz v0, :cond_3

    :cond_2
    iget-object v0, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    invoke-virtual {v0}, Landroid/widget/TextView;->getCompoundDrawablesRelative()[Landroid/graphics/drawable/Drawable;

    move-result-object v0

    aget-object v2, v0, v2

    iget-object v3, p0, Landroidx/appcompat/widget/n;->f:Landroidx/appcompat/widget/g0;

    invoke-direct {p0, v2, v3}, Landroidx/appcompat/widget/n;->a(Landroid/graphics/drawable/Drawable;Landroidx/appcompat/widget/g0;)V

    aget-object v0, v0, v1

    iget-object v1, p0, Landroidx/appcompat/widget/n;->g:Landroidx/appcompat/widget/g0;

    invoke-direct {p0, v0, v1}, Landroidx/appcompat/widget/n;->a(Landroid/graphics/drawable/Drawable;Landroidx/appcompat/widget/g0;)V

    :cond_3
    return-void
.end method

.method c()V
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v0}, Landroidx/appcompat/widget/p;->a()V

    return-void
.end method

.method e()I
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v0}, Landroidx/appcompat/widget/p;->f()I

    move-result v0

    return v0
.end method

.method f()I
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v0}, Landroidx/appcompat/widget/p;->g()I

    move-result v0

    return v0
.end method

.method g()I
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v0}, Landroidx/appcompat/widget/p;->h()I

    move-result v0

    return v0
.end method

.method h()[I
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v0}, Landroidx/appcompat/widget/p;->i()[I

    move-result-object v0

    return-object v0
.end method

.method i()I
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v0}, Landroidx/appcompat/widget/p;->j()I

    move-result v0

    return v0
.end method

.method j()Z
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v0}, Landroidx/appcompat/widget/p;->m()Z

    move-result v0

    return v0
.end method

.method k(Landroid/util/AttributeSet;I)V
    .locals 11
    .annotation build Landroid/annotation/SuppressLint;
        value = {
            "NewApi"
        }
    .end annotation

    iget-object v0, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    invoke-virtual {v0}, Landroid/widget/TextView;->getContext()Landroid/content/Context;

    move-result-object v0

    invoke-static {}, Landroidx/appcompat/widget/f;->m()Landroidx/appcompat/widget/f;

    move-result-object v1

    sget-object v2, La/j;->M:[I

    const/4 v3, 0x0

    invoke-static {v0, p1, v2, p2, v3}, Landroidx/appcompat/widget/i0;->s(Landroid/content/Context;Landroid/util/AttributeSet;[III)Landroidx/appcompat/widget/i0;

    move-result-object v2

    sget v4, La/j;->N:I

    const/4 v5, -0x1

    invoke-virtual {v2, v4, v5}, Landroidx/appcompat/widget/i0;->l(II)I

    move-result v4

    sget v6, La/j;->Q:I

    invoke-virtual {v2, v6}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v7

    if-eqz v7, :cond_0

    invoke-virtual {v2, v6, v3}, Landroidx/appcompat/widget/i0;->l(II)I

    move-result v6

    invoke-static {v0, v1, v6}, Landroidx/appcompat/widget/n;->d(Landroid/content/Context;Landroidx/appcompat/widget/f;I)Landroidx/appcompat/widget/g0;

    move-result-object v6

    iput-object v6, p0, Landroidx/appcompat/widget/n;->b:Landroidx/appcompat/widget/g0;

    :cond_0
    sget v6, La/j;->O:I

    invoke-virtual {v2, v6}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v7

    if-eqz v7, :cond_1

    invoke-virtual {v2, v6, v3}, Landroidx/appcompat/widget/i0;->l(II)I

    move-result v6

    invoke-static {v0, v1, v6}, Landroidx/appcompat/widget/n;->d(Landroid/content/Context;Landroidx/appcompat/widget/f;I)Landroidx/appcompat/widget/g0;

    move-result-object v6

    iput-object v6, p0, Landroidx/appcompat/widget/n;->c:Landroidx/appcompat/widget/g0;

    :cond_1
    sget v6, La/j;->R:I

    invoke-virtual {v2, v6}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v7

    if-eqz v7, :cond_2

    invoke-virtual {v2, v6, v3}, Landroidx/appcompat/widget/i0;->l(II)I

    move-result v6

    invoke-static {v0, v1, v6}, Landroidx/appcompat/widget/n;->d(Landroid/content/Context;Landroidx/appcompat/widget/f;I)Landroidx/appcompat/widget/g0;

    move-result-object v6

    iput-object v6, p0, Landroidx/appcompat/widget/n;->d:Landroidx/appcompat/widget/g0;

    :cond_2
    sget v6, La/j;->P:I

    invoke-virtual {v2, v6}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v7

    if-eqz v7, :cond_3

    invoke-virtual {v2, v6, v3}, Landroidx/appcompat/widget/i0;->l(II)I

    move-result v6

    invoke-static {v0, v1, v6}, Landroidx/appcompat/widget/n;->d(Landroid/content/Context;Landroidx/appcompat/widget/f;I)Landroidx/appcompat/widget/g0;

    move-result-object v6

    iput-object v6, p0, Landroidx/appcompat/widget/n;->e:Landroidx/appcompat/widget/g0;

    :cond_3
    sget v6, Landroid/os/Build$VERSION;->SDK_INT:I

    sget v7, La/j;->S:I

    invoke-virtual {v2, v7}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v8

    if-eqz v8, :cond_4

    invoke-virtual {v2, v7, v3}, Landroidx/appcompat/widget/i0;->l(II)I

    move-result v7

    invoke-static {v0, v1, v7}, Landroidx/appcompat/widget/n;->d(Landroid/content/Context;Landroidx/appcompat/widget/f;I)Landroidx/appcompat/widget/g0;

    move-result-object v7

    iput-object v7, p0, Landroidx/appcompat/widget/n;->f:Landroidx/appcompat/widget/g0;

    :cond_4
    sget v7, La/j;->T:I

    invoke-virtual {v2, v7}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v8

    if-eqz v8, :cond_5

    invoke-virtual {v2, v7, v3}, Landroidx/appcompat/widget/i0;->l(II)I

    move-result v7

    invoke-static {v0, v1, v7}, Landroidx/appcompat/widget/n;->d(Landroid/content/Context;Landroidx/appcompat/widget/f;I)Landroidx/appcompat/widget/g0;

    move-result-object v1

    iput-object v1, p0, Landroidx/appcompat/widget/n;->g:Landroidx/appcompat/widget/g0;

    :cond_5
    invoke-virtual {v2}, Landroidx/appcompat/widget/i0;->t()V

    iget-object v1, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    invoke-virtual {v1}, Landroid/widget/TextView;->getTransformationMethod()Landroid/text/method/TransformationMethod;

    move-result-object v1

    instance-of v1, v1, Landroid/text/method/PasswordTransformationMethod;

    const/4 v2, 0x1

    if-eq v4, v5, :cond_7

    sget-object v7, La/j;->X1:[I

    invoke-static {v0, v4, v7}, Landroidx/appcompat/widget/i0;->q(Landroid/content/Context;I[I)Landroidx/appcompat/widget/i0;

    move-result-object v4

    if-nez v1, :cond_6

    sget v7, La/j;->d2:I

    invoke-virtual {v4, v7}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v8

    if-eqz v8, :cond_6

    invoke-virtual {v4, v7, v3}, Landroidx/appcompat/widget/i0;->a(IZ)Z

    move-result v7

    move v8, v2

    goto :goto_0

    :cond_6
    move v7, v3

    move v8, v7

    :goto_0
    invoke-direct {p0, v0, v4}, Landroidx/appcompat/widget/n;->u(Landroid/content/Context;Landroidx/appcompat/widget/i0;)V

    invoke-virtual {v4}, Landroidx/appcompat/widget/i0;->t()V

    goto :goto_1

    :cond_7
    move v7, v3

    move v8, v7

    :goto_1
    sget-object v4, La/j;->X1:[I

    invoke-static {v0, p1, v4, p2, v3}, Landroidx/appcompat/widget/i0;->s(Landroid/content/Context;Landroid/util/AttributeSet;[III)Landroidx/appcompat/widget/i0;

    move-result-object v4

    if-nez v1, :cond_8

    sget v9, La/j;->d2:I

    invoke-virtual {v4, v9}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v10

    if-eqz v10, :cond_8

    invoke-virtual {v4, v9, v3}, Landroidx/appcompat/widget/i0;->a(IZ)Z

    move-result v7

    goto :goto_2

    :cond_8
    move v2, v8

    :goto_2
    const/16 v8, 0x1c

    if-lt v6, v8, :cond_9

    sget v6, La/j;->Y1:I

    invoke-virtual {v4, v6}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v8

    if-eqz v8, :cond_9

    invoke-virtual {v4, v6, v5}, Landroidx/appcompat/widget/i0;->e(II)I

    move-result v6

    if-nez v6, :cond_9

    iget-object v6, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    const/4 v8, 0x0

    invoke-virtual {v6, v3, v8}, Landroid/widget/TextView;->setTextSize(IF)V

    :cond_9
    invoke-direct {p0, v0, v4}, Landroidx/appcompat/widget/n;->u(Landroid/content/Context;Landroidx/appcompat/widget/i0;)V

    invoke-virtual {v4}, Landroidx/appcompat/widget/i0;->t()V

    if-nez v1, :cond_a

    if-eqz v2, :cond_a

    invoke-virtual {p0, v7}, Landroidx/appcompat/widget/n;->o(Z)V

    :cond_a
    iget-object v1, p0, Landroidx/appcompat/widget/n;->j:Landroid/graphics/Typeface;

    if-eqz v1, :cond_b

    iget-object v2, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    iget v4, p0, Landroidx/appcompat/widget/n;->i:I

    invoke-virtual {v2, v1, v4}, Landroid/widget/TextView;->setTypeface(Landroid/graphics/Typeface;I)V

    :cond_b
    iget-object v1, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v1, p1, p2}, Landroidx/appcompat/widget/p;->n(Landroid/util/AttributeSet;I)V

    sget-boolean p2, Landroidx/core/widget/b;->a:Z

    if-eqz p2, :cond_d

    iget-object p2, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {p2}, Landroidx/appcompat/widget/p;->j()I

    move-result p2

    if-eqz p2, :cond_d

    iget-object p2, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {p2}, Landroidx/appcompat/widget/p;->i()[I

    move-result-object p2

    array-length v1, p2

    if-lez v1, :cond_d

    iget-object v1, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    invoke-virtual {v1}, Landroid/widget/TextView;->getAutoSizeStepGranularity()I

    move-result v1

    int-to-float v1, v1

    const/high16 v2, -0x40800000    # -1.0f

    cmpl-float v1, v1, v2

    if-eqz v1, :cond_c

    iget-object p2, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    iget-object v1, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v1}, Landroidx/appcompat/widget/p;->g()I

    move-result v1

    iget-object v2, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v2}, Landroidx/appcompat/widget/p;->f()I

    move-result v2

    iget-object v4, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v4}, Landroidx/appcompat/widget/p;->h()I

    move-result v4

    invoke-virtual {p2, v1, v2, v4, v3}, Landroid/widget/TextView;->setAutoSizeTextTypeUniformWithConfiguration(IIII)V

    goto :goto_3

    :cond_c
    iget-object v1, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    invoke-virtual {v1, p2, v3}, Landroid/widget/TextView;->setAutoSizeTextTypeUniformWithPresetSizes([II)V

    :cond_d
    :goto_3
    sget-object p2, La/j;->U:[I

    invoke-static {v0, p1, p2}, Landroidx/appcompat/widget/i0;->r(Landroid/content/Context;Landroid/util/AttributeSet;[I)Landroidx/appcompat/widget/i0;

    move-result-object p1

    sget p2, La/j;->a0:I

    invoke-virtual {p1, p2, v5}, Landroidx/appcompat/widget/i0;->e(II)I

    move-result p2

    sget v0, La/j;->b0:I

    invoke-virtual {p1, v0, v5}, Landroidx/appcompat/widget/i0;->e(II)I

    move-result v0

    sget v1, La/j;->c0:I

    invoke-virtual {p1, v1, v5}, Landroidx/appcompat/widget/i0;->e(II)I

    move-result v1

    invoke-virtual {p1}, Landroidx/appcompat/widget/i0;->t()V

    if-eq p2, v5, :cond_e

    iget-object p1, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    invoke-static {p1, p2}, Landroidx/core/widget/h;->f(Landroid/widget/TextView;I)V

    :cond_e
    if-eq v0, v5, :cond_f

    iget-object p1, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    invoke-static {p1, v0}, Landroidx/core/widget/h;->g(Landroid/widget/TextView;I)V

    :cond_f
    if-eq v1, v5, :cond_10

    iget-object p1, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    invoke-static {p1, v1}, Landroidx/core/widget/h;->h(Landroid/widget/TextView;I)V

    :cond_10
    return-void
.end method

.method l(Ljava/lang/ref/WeakReference;Landroid/graphics/Typeface;)V
    .locals 1
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "(",
            "Ljava/lang/ref/WeakReference<",
            "Landroid/widget/TextView;",
            ">;",
            "Landroid/graphics/Typeface;",
            ")V"
        }
    .end annotation

    iget-boolean v0, p0, Landroidx/appcompat/widget/n;->k:Z

    if-eqz v0, :cond_0

    iput-object p2, p0, Landroidx/appcompat/widget/n;->j:Landroid/graphics/Typeface;

    invoke-virtual {p1}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Landroid/widget/TextView;

    if-eqz p1, :cond_0

    iget v0, p0, Landroidx/appcompat/widget/n;->i:I

    invoke-virtual {p1, p2, v0}, Landroid/widget/TextView;->setTypeface(Landroid/graphics/Typeface;I)V

    :cond_0
    return-void
.end method

.method m(ZIIII)V
    .locals 0

    sget-boolean p1, Landroidx/core/widget/b;->a:Z

    if-nez p1, :cond_0

    invoke-virtual {p0}, Landroidx/appcompat/widget/n;->c()V

    :cond_0
    return-void
.end method

.method n(Landroid/content/Context;I)V
    .locals 3

    sget-object v0, La/j;->X1:[I

    invoke-static {p1, p2, v0}, Landroidx/appcompat/widget/i0;->q(Landroid/content/Context;I[I)Landroidx/appcompat/widget/i0;

    move-result-object p2

    sget v0, La/j;->d2:I

    invoke-virtual {p2, v0}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v1

    const/4 v2, 0x0

    if-eqz v1, :cond_0

    invoke-virtual {p2, v0, v2}, Landroidx/appcompat/widget/i0;->a(IZ)Z

    move-result v0

    invoke-virtual {p0, v0}, Landroidx/appcompat/widget/n;->o(Z)V

    :cond_0
    sget v0, La/j;->Y1:I

    invoke-virtual {p2, v0}, Landroidx/appcompat/widget/i0;->p(I)Z

    move-result v1

    if-eqz v1, :cond_1

    const/4 v1, -0x1

    invoke-virtual {p2, v0, v1}, Landroidx/appcompat/widget/i0;->e(II)I

    move-result v0

    if-nez v0, :cond_1

    iget-object v0, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    const/4 v1, 0x0

    invoke-virtual {v0, v2, v1}, Landroid/widget/TextView;->setTextSize(IF)V

    :cond_1
    invoke-direct {p0, p1, p2}, Landroidx/appcompat/widget/n;->u(Landroid/content/Context;Landroidx/appcompat/widget/i0;)V

    invoke-virtual {p2}, Landroidx/appcompat/widget/i0;->t()V

    iget-object p1, p0, Landroidx/appcompat/widget/n;->j:Landroid/graphics/Typeface;

    if-eqz p1, :cond_2

    iget-object p2, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    iget v0, p0, Landroidx/appcompat/widget/n;->i:I

    invoke-virtual {p2, p1, v0}, Landroid/widget/TextView;->setTypeface(Landroid/graphics/Typeface;I)V

    :cond_2
    return-void
.end method

.method o(Z)V
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/n;->a:Landroid/widget/TextView;

    invoke-virtual {v0, p1}, Landroid/widget/TextView;->setAllCaps(Z)V

    return-void
.end method

.method p(IIII)V
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v0, p1, p2, p3, p4}, Landroidx/appcompat/widget/p;->o(IIII)V

    return-void
.end method

.method q([II)V
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v0, p1, p2}, Landroidx/appcompat/widget/p;->p([II)V

    return-void
.end method

.method r(I)V
    .locals 1

    iget-object v0, p0, Landroidx/appcompat/widget/n;->h:Landroidx/appcompat/widget/p;

    invoke-virtual {v0, p1}, Landroidx/appcompat/widget/p;->q(I)V

    return-void
.end method

.method s(IF)V
    .locals 1

    sget-boolean v0, Landroidx/core/widget/b;->a:Z

    if-nez v0, :cond_0

    invoke-virtual {p0}, Landroidx/appcompat/widget/n;->j()Z

    move-result v0

    if-nez v0, :cond_0

    invoke-direct {p0, p1, p2}, Landroidx/appcompat/widget/n;->t(IF)V

    :cond_0
    return-void
.end method
