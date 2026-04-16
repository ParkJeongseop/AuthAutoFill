.class public final Landroidx/appcompat/widget/f;
.super Ljava/lang/Object;
.source "SourceFile"


# annotations
.annotation system Ldalvik/annotation/MemberClasses;
    value = {
        Landroidx/appcompat/widget/f$a;,
        Landroidx/appcompat/widget/f$b;
    }
.end annotation


# static fields
.field private static final g:Landroid/graphics/PorterDuff$Mode;

.field private static h:Landroidx/appcompat/widget/f;

.field private static final i:Landroidx/appcompat/widget/f$a;

.field private static final j:[I

.field private static final k:[I

.field private static final l:[I

.field private static final m:[I

.field private static final n:[I

.field private static final o:[I


# instance fields
.field private a:Ljava/util/WeakHashMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/WeakHashMap<",
            "Landroid/content/Context;",
            "Lg/g<",
            "Landroid/content/res/ColorStateList;",
            ">;>;"
        }
    .end annotation
.end field

.field private b:Lg/a;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lg/a<",
            "Ljava/lang/String;",
            "Landroidx/appcompat/widget/f$b;",
            ">;"
        }
    .end annotation
.end field

.field private c:Lg/g;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Lg/g<",
            "Ljava/lang/String;",
            ">;"
        }
    .end annotation
.end field

.field private final d:Ljava/util/WeakHashMap;
    .annotation system Ldalvik/annotation/Signature;
        value = {
            "Ljava/util/WeakHashMap<",
            "Landroid/content/Context;",
            "Lg/c<",
            "Ljava/lang/ref/WeakReference<",
            "Landroid/graphics/drawable/Drawable$ConstantState;",
            ">;>;>;"
        }
    .end annotation
.end field

.field private e:Landroid/util/TypedValue;

.field private f:Z


# direct methods
.method static constructor <clinit>()V
    .locals 10

    sget-object v0, Landroid/graphics/PorterDuff$Mode;->SRC_IN:Landroid/graphics/PorterDuff$Mode;

    sput-object v0, Landroidx/appcompat/widget/f;->g:Landroid/graphics/PorterDuff$Mode;

    new-instance v0, Landroidx/appcompat/widget/f$a;

    const/4 v1, 0x6

    invoke-direct {v0, v1}, Landroidx/appcompat/widget/f$a;-><init>(I)V

    sput-object v0, Landroidx/appcompat/widget/f;->i:Landroidx/appcompat/widget/f$a;

    const/4 v0, 0x3

    new-array v2, v0, [I

    sget v3, La/e;->Q:I

    const/4 v4, 0x0

    aput v3, v2, v4

    sget v3, La/e;->O:I

    const/4 v5, 0x1

    aput v3, v2, v5

    sget v3, La/e;->a:I

    const/4 v6, 0x2

    aput v3, v2, v6

    sput-object v2, Landroidx/appcompat/widget/f;->j:[I

    const/4 v2, 0x7

    new-array v3, v2, [I

    sget v7, La/e;->m:I

    aput v7, v3, v4

    sget v7, La/e;->z:I

    aput v7, v3, v5

    sget v7, La/e;->r:I

    aput v7, v3, v6

    sget v7, La/e;->n:I

    aput v7, v3, v0

    sget v7, La/e;->o:I

    const/4 v8, 0x4

    aput v7, v3, v8

    sget v7, La/e;->q:I

    const/4 v9, 0x5

    aput v7, v3, v9

    sget v7, La/e;->p:I

    aput v7, v3, v1

    sput-object v3, Landroidx/appcompat/widget/f;->k:[I

    const/16 v3, 0xa

    new-array v3, v3, [I

    sget v7, La/e;->N:I

    aput v7, v3, v4

    sget v7, La/e;->P:I

    aput v7, v3, v5

    sget v7, La/e;->i:I

    aput v7, v3, v6

    sget v7, La/e;->G:I

    aput v7, v3, v0

    sget v7, La/e;->H:I

    aput v7, v3, v8

    sget v7, La/e;->J:I

    aput v7, v3, v9

    sget v7, La/e;->L:I

    aput v7, v3, v1

    sget v1, La/e;->I:I

    aput v1, v3, v2

    sget v1, La/e;->K:I

    const/16 v2, 0x8

    aput v1, v3, v2

    sget v1, La/e;->M:I

    const/16 v2, 0x9

    aput v1, v3, v2

    sput-object v3, Landroidx/appcompat/widget/f;->l:[I

    new-array v0, v0, [I

    sget v1, La/e;->u:I

    aput v1, v0, v4

    sget v1, La/e;->g:I

    aput v1, v0, v5

    sget v1, La/e;->t:I

    aput v1, v0, v6

    sput-object v0, Landroidx/appcompat/widget/f;->m:[I

    new-array v0, v6, [I

    sget v1, La/e;->F:I

    aput v1, v0, v4

    sget v1, La/e;->R:I

    aput v1, v0, v5

    sput-object v0, Landroidx/appcompat/widget/f;->n:[I

    new-array v0, v6, [I

    sget v1, La/e;->c:I

    aput v1, v0, v4

    sget v1, La/e;->f:I

    aput v1, v0, v5

    sput-object v0, Landroidx/appcompat/widget/f;->o:[I

    return-void
.end method

.method public constructor <init>()V
    .locals 2

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    new-instance v0, Ljava/util/WeakHashMap;

    const/4 v1, 0x0

    invoke-direct {v0, v1}, Ljava/util/WeakHashMap;-><init>(I)V

    iput-object v0, p0, Landroidx/appcompat/widget/f;->d:Ljava/util/WeakHashMap;

    return-void
.end method

.method static A(Landroid/graphics/drawable/Drawable;Landroidx/appcompat/widget/g0;[I)V
    .locals 2

    invoke-static {p0}, Landroidx/appcompat/widget/r;->a(Landroid/graphics/drawable/Drawable;)Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-virtual {p0}, Landroid/graphics/drawable/Drawable;->mutate()Landroid/graphics/drawable/Drawable;

    move-result-object v0

    if-eq v0, p0, :cond_0

    const-string p0, "AppCompatDrawableManag"

    const-string p1, "Mutated drawable is not the same instance as the input."

    invoke-static {p0, p1}, Landroid/util/Log;->d(Ljava/lang/String;Ljava/lang/String;)I

    return-void

    :cond_0
    iget-boolean v0, p1, Landroidx/appcompat/widget/g0;->d:Z

    if-nez v0, :cond_2

    iget-boolean v1, p1, Landroidx/appcompat/widget/g0;->c:Z

    if-eqz v1, :cond_1

    goto :goto_0

    :cond_1
    invoke-virtual {p0}, Landroid/graphics/drawable/Drawable;->clearColorFilter()V

    goto :goto_3

    :cond_2
    :goto_0
    if-eqz v0, :cond_3

    iget-object v0, p1, Landroidx/appcompat/widget/g0;->a:Landroid/content/res/ColorStateList;

    goto :goto_1

    :cond_3
    const/4 v0, 0x0

    :goto_1
    iget-boolean v1, p1, Landroidx/appcompat/widget/g0;->c:Z

    if-eqz v1, :cond_4

    iget-object p1, p1, Landroidx/appcompat/widget/g0;->b:Landroid/graphics/PorterDuff$Mode;

    goto :goto_2

    :cond_4
    sget-object p1, Landroidx/appcompat/widget/f;->g:Landroid/graphics/PorterDuff$Mode;

    :goto_2
    invoke-static {v0, p1, p2}, Landroidx/appcompat/widget/f;->l(Landroid/content/res/ColorStateList;Landroid/graphics/PorterDuff$Mode;[I)Landroid/graphics/PorterDuffColorFilter;

    move-result-object p1

    invoke-virtual {p0, p1}, Landroid/graphics/drawable/Drawable;->setColorFilter(Landroid/graphics/ColorFilter;)V

    :goto_3
    return-void
.end method

.method static B(Landroid/content/Context;ILandroid/graphics/drawable/Drawable;)Z
    .locals 6

    sget-object v0, Landroidx/appcompat/widget/f;->g:Landroid/graphics/PorterDuff$Mode;

    sget-object v1, Landroidx/appcompat/widget/f;->j:[I

    invoke-static {v1, p1}, Landroidx/appcompat/widget/f;->c([II)Z

    move-result v1

    const v2, 0x1010031

    const/4 v3, -0x1

    const/4 v4, 0x0

    const/4 v5, 0x1

    if-eqz v1, :cond_0

    sget v2, La/a;->o:I

    :goto_0
    move p1, v3

    :goto_1
    move v1, v5

    goto :goto_2

    :cond_0
    sget-object v1, Landroidx/appcompat/widget/f;->l:[I

    invoke-static {v1, p1}, Landroidx/appcompat/widget/f;->c([II)Z

    move-result v1

    if-eqz v1, :cond_1

    sget v2, La/a;->m:I

    goto :goto_0

    :cond_1
    sget-object v1, Landroidx/appcompat/widget/f;->m:[I

    invoke-static {v1, p1}, Landroidx/appcompat/widget/f;->c([II)Z

    move-result v1

    if-eqz v1, :cond_2

    sget-object v0, Landroid/graphics/PorterDuff$Mode;->MULTIPLY:Landroid/graphics/PorterDuff$Mode;

    goto :goto_0

    :cond_2
    sget v1, La/e;->s:I

    if-ne p1, v1, :cond_3

    const v2, 0x1010030

    const p1, 0x42233333    # 40.8f

    invoke-static {p1}, Ljava/lang/Math;->round(F)I

    move-result p1

    goto :goto_1

    :cond_3
    sget v1, La/e;->j:I

    if-ne p1, v1, :cond_4

    goto :goto_0

    :cond_4
    move p1, v3

    move v1, v4

    move v2, v1

    :goto_2
    if-eqz v1, :cond_7

    invoke-static {p2}, Landroidx/appcompat/widget/r;->a(Landroid/graphics/drawable/Drawable;)Z

    move-result v1

    if-eqz v1, :cond_5

    invoke-virtual {p2}, Landroid/graphics/drawable/Drawable;->mutate()Landroid/graphics/drawable/Drawable;

    move-result-object p2

    :cond_5
    invoke-static {p0, v2}, Landroidx/appcompat/widget/d0;->b(Landroid/content/Context;I)I

    move-result p0

    invoke-static {p0, v0}, Landroidx/appcompat/widget/f;->q(ILandroid/graphics/PorterDuff$Mode;)Landroid/graphics/PorterDuffColorFilter;

    move-result-object p0

    invoke-virtual {p2, p0}, Landroid/graphics/drawable/Drawable;->setColorFilter(Landroid/graphics/ColorFilter;)V

    if-eq p1, v3, :cond_6

    invoke-virtual {p2, p1}, Landroid/graphics/drawable/Drawable;->setAlpha(I)V

    :cond_6
    return v5

    :cond_7
    return v4
.end method

.method private declared-synchronized a(Landroid/content/Context;JLandroid/graphics/drawable/Drawable;)Z
    .locals 2

    monitor-enter p0

    :try_start_0
    invoke-virtual {p4}, Landroid/graphics/drawable/Drawable;->getConstantState()Landroid/graphics/drawable/Drawable$ConstantState;

    move-result-object p4

    if-eqz p4, :cond_1

    iget-object v0, p0, Landroidx/appcompat/widget/f;->d:Ljava/util/WeakHashMap;

    invoke-virtual {v0, p1}, Ljava/util/WeakHashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lg/c;

    if-nez v0, :cond_0

    new-instance v0, Lg/c;

    invoke-direct {v0}, Lg/c;-><init>()V

    iget-object v1, p0, Landroidx/appcompat/widget/f;->d:Ljava/util/WeakHashMap;

    invoke-virtual {v1, p1, v0}, Ljava/util/WeakHashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    :cond_0
    new-instance p1, Ljava/lang/ref/WeakReference;

    invoke-direct {p1, p4}, Ljava/lang/ref/WeakReference;-><init>(Ljava/lang/Object;)V

    invoke-virtual {v0, p2, p3, p1}, Lg/c;->g(JLjava/lang/Object;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const/4 p1, 0x1

    :goto_0
    monitor-exit p0

    return p1

    :cond_1
    const/4 p1, 0x0

    goto :goto_0

    :catchall_0
    move-exception p1

    monitor-exit p0

    throw p1
.end method

.method private b(Landroid/content/Context;ILandroid/content/res/ColorStateList;)V
    .locals 2

    iget-object v0, p0, Landroidx/appcompat/widget/f;->a:Ljava/util/WeakHashMap;

    if-nez v0, :cond_0

    new-instance v0, Ljava/util/WeakHashMap;

    invoke-direct {v0}, Ljava/util/WeakHashMap;-><init>()V

    iput-object v0, p0, Landroidx/appcompat/widget/f;->a:Ljava/util/WeakHashMap;

    :cond_0
    iget-object v0, p0, Landroidx/appcompat/widget/f;->a:Ljava/util/WeakHashMap;

    invoke-virtual {v0, p1}, Ljava/util/WeakHashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lg/g;

    if-nez v0, :cond_1

    new-instance v0, Lg/g;

    invoke-direct {v0}, Lg/g;-><init>()V

    iget-object v1, p0, Landroidx/appcompat/widget/f;->a:Ljava/util/WeakHashMap;

    invoke-virtual {v1, p1, v0}, Ljava/util/WeakHashMap;->put(Ljava/lang/Object;Ljava/lang/Object;)Ljava/lang/Object;

    :cond_1
    invoke-virtual {v0, p2, p3}, Lg/g;->a(ILjava/lang/Object;)V

    return-void
.end method

.method private static c([II)Z
    .locals 4

    array-length v0, p0

    const/4 v1, 0x0

    move v2, v1

    :goto_0
    if-ge v2, v0, :cond_1

    aget v3, p0, v2

    if-ne v3, p1, :cond_0

    const/4 p0, 0x1

    return p0

    :cond_0
    add-int/lit8 v2, v2, 0x1

    goto :goto_0

    :cond_1
    return v1
.end method

.method private d(Landroid/content/Context;)V
    .locals 1

    iget-boolean v0, p0, Landroidx/appcompat/widget/f;->f:Z

    if-eqz v0, :cond_0

    return-void

    :cond_0
    const/4 v0, 0x1

    iput-boolean v0, p0, Landroidx/appcompat/widget/f;->f:Z

    sget v0, La/e;->S:I

    invoke-virtual {p0, p1, v0}, Landroidx/appcompat/widget/f;->o(Landroid/content/Context;I)Landroid/graphics/drawable/Drawable;

    move-result-object p1

    if-eqz p1, :cond_1

    invoke-static {p1}, Landroidx/appcompat/widget/f;->v(Landroid/graphics/drawable/Drawable;)Z

    move-result p1

    if-eqz p1, :cond_1

    return-void

    :cond_1
    const/4 p1, 0x0

    iput-boolean p1, p0, Landroidx/appcompat/widget/f;->f:Z

    new-instance p1, Ljava/lang/IllegalStateException;

    const-string v0, "This app has been built with an incorrect configuration. Please configure your build for VectorDrawableCompat."

    invoke-direct {p1, v0}, Ljava/lang/IllegalStateException;-><init>(Ljava/lang/String;)V

    throw p1
.end method

.method private e(Landroid/content/Context;)Landroid/content/res/ColorStateList;
    .locals 1

    const/4 v0, 0x0

    invoke-direct {p0, p1, v0}, Landroidx/appcompat/widget/f;->f(Landroid/content/Context;I)Landroid/content/res/ColorStateList;

    move-result-object p1

    return-object p1
.end method

.method private f(Landroid/content/Context;I)Landroid/content/res/ColorStateList;
    .locals 5

    const/4 v0, 0x4

    new-array v1, v0, [[I

    new-array v0, v0, [I

    sget v2, La/a;->n:I

    invoke-static {p1, v2}, Landroidx/appcompat/widget/d0;->b(Landroid/content/Context;I)I

    move-result v2

    sget v3, La/a;->l:I

    invoke-static {p1, v3}, Landroidx/appcompat/widget/d0;->a(Landroid/content/Context;I)I

    move-result p1

    sget-object v3, Landroidx/appcompat/widget/d0;->b:[I

    const/4 v4, 0x0

    aput-object v3, v1, v4

    aput p1, v0, v4

    sget-object p1, Landroidx/appcompat/widget/d0;->e:[I

    const/4 v3, 0x1

    aput-object p1, v1, v3

    invoke-static {v2, p2}, Lk/a;->b(II)I

    move-result p1

    aput p1, v0, v3

    sget-object p1, Landroidx/appcompat/widget/d0;->c:[I

    const/4 v3, 0x2

    aput-object p1, v1, v3

    invoke-static {v2, p2}, Lk/a;->b(II)I

    move-result p1

    aput p1, v0, v3

    sget-object p1, Landroidx/appcompat/widget/d0;->i:[I

    const/4 v2, 0x3

    aput-object p1, v1, v2

    aput p2, v0, v2

    new-instance p1, Landroid/content/res/ColorStateList;

    invoke-direct {p1, v1, v0}, Landroid/content/res/ColorStateList;-><init>([[I[I)V

    return-object p1
.end method

.method private static g(Landroid/util/TypedValue;)J
    .locals 4

    iget v0, p0, Landroid/util/TypedValue;->assetCookie:I

    int-to-long v0, v0

    const/16 v2, 0x20

    shl-long/2addr v0, v2

    iget p0, p0, Landroid/util/TypedValue;->data:I

    int-to-long v2, p0

    or-long/2addr v0, v2

    return-wide v0
.end method

.method private h(Landroid/content/Context;)Landroid/content/res/ColorStateList;
    .locals 1

    sget v0, La/a;->k:I

    invoke-static {p1, v0}, Landroidx/appcompat/widget/d0;->b(Landroid/content/Context;I)I

    move-result v0

    invoke-direct {p0, p1, v0}, Landroidx/appcompat/widget/f;->f(Landroid/content/Context;I)Landroid/content/res/ColorStateList;

    move-result-object p1

    return-object p1
.end method

.method private i(Landroid/content/Context;)Landroid/content/res/ColorStateList;
    .locals 1

    sget v0, La/a;->l:I

    invoke-static {p1, v0}, Landroidx/appcompat/widget/d0;->b(Landroid/content/Context;I)I

    move-result v0

    invoke-direct {p0, p1, v0}, Landroidx/appcompat/widget/f;->f(Landroid/content/Context;I)Landroid/content/res/ColorStateList;

    move-result-object p1

    return-object p1
.end method

.method private j(Landroid/content/Context;I)Landroid/graphics/drawable/Drawable;
    .locals 7

    iget-object v0, p0, Landroidx/appcompat/widget/f;->e:Landroid/util/TypedValue;

    if-nez v0, :cond_0

    new-instance v0, Landroid/util/TypedValue;

    invoke-direct {v0}, Landroid/util/TypedValue;-><init>()V

    iput-object v0, p0, Landroidx/appcompat/widget/f;->e:Landroid/util/TypedValue;

    :cond_0
    iget-object v0, p0, Landroidx/appcompat/widget/f;->e:Landroid/util/TypedValue;

    invoke-virtual {p1}, Landroid/content/Context;->getResources()Landroid/content/res/Resources;

    move-result-object v1

    const/4 v2, 0x1

    invoke-virtual {v1, p2, v0, v2}, Landroid/content/res/Resources;->getValue(ILandroid/util/TypedValue;Z)V

    invoke-static {v0}, Landroidx/appcompat/widget/f;->g(Landroid/util/TypedValue;)J

    move-result-wide v3

    invoke-direct {p0, p1, v3, v4}, Landroidx/appcompat/widget/f;->n(Landroid/content/Context;J)Landroid/graphics/drawable/Drawable;

    move-result-object v1

    if-eqz v1, :cond_1

    return-object v1

    :cond_1
    sget v5, La/e;->h:I

    if-ne p2, v5, :cond_2

    new-instance v1, Landroid/graphics/drawable/LayerDrawable;

    const/4 p2, 0x2

    new-array p2, p2, [Landroid/graphics/drawable/Drawable;

    const/4 v5, 0x0

    sget v6, La/e;->g:I

    invoke-virtual {p0, p1, v6}, Landroidx/appcompat/widget/f;->o(Landroid/content/Context;I)Landroid/graphics/drawable/Drawable;

    move-result-object v6

    aput-object v6, p2, v5

    sget v5, La/e;->i:I

    invoke-virtual {p0, p1, v5}, Landroidx/appcompat/widget/f;->o(Landroid/content/Context;I)Landroid/graphics/drawable/Drawable;

    move-result-object v5

    aput-object v5, p2, v2

    invoke-direct {v1, p2}, Landroid/graphics/drawable/LayerDrawable;-><init>([Landroid/graphics/drawable/Drawable;)V

    :cond_2
    if-eqz v1, :cond_3

    iget p2, v0, Landroid/util/TypedValue;->changingConfigurations:I

    invoke-virtual {v1, p2}, Landroid/graphics/drawable/Drawable;->setChangingConfigurations(I)V

    invoke-direct {p0, p1, v3, v4, v1}, Landroidx/appcompat/widget/f;->a(Landroid/content/Context;JLandroid/graphics/drawable/Drawable;)Z

    :cond_3
    return-object v1
.end method

.method private k(Landroid/content/Context;)Landroid/content/res/ColorStateList;
    .locals 8

    const/4 v0, 0x3

    new-array v1, v0, [[I

    new-array v0, v0, [I

    sget v2, La/a;->p:I

    invoke-static {p1, v2}, Landroidx/appcompat/widget/d0;->d(Landroid/content/Context;I)Landroid/content/res/ColorStateList;

    move-result-object v3

    const/4 v4, 0x2

    const/4 v5, 0x1

    const/4 v6, 0x0

    if-eqz v3, :cond_0

    invoke-virtual {v3}, Landroid/content/res/ColorStateList;->isStateful()Z

    move-result v7

    if-eqz v7, :cond_0

    sget-object v2, Landroidx/appcompat/widget/d0;->b:[I

    aput-object v2, v1, v6

    aget-object v2, v1, v6

    invoke-virtual {v3, v2, v6}, Landroid/content/res/ColorStateList;->getColorForState([II)I

    move-result v2

    aput v2, v0, v6

    sget-object v2, Landroidx/appcompat/widget/d0;->f:[I

    aput-object v2, v1, v5

    sget v2, La/a;->m:I

    invoke-static {p1, v2}, Landroidx/appcompat/widget/d0;->b(Landroid/content/Context;I)I

    move-result p1

    aput p1, v0, v5

    sget-object p1, Landroidx/appcompat/widget/d0;->i:[I

    aput-object p1, v1, v4

    invoke-virtual {v3}, Landroid/content/res/ColorStateList;->getDefaultColor()I

    move-result p1

    aput p1, v0, v4

    goto :goto_0

    :cond_0
    sget-object v3, Landroidx/appcompat/widget/d0;->b:[I

    aput-object v3, v1, v6

    invoke-static {p1, v2}, Landroidx/appcompat/widget/d0;->a(Landroid/content/Context;I)I

    move-result v3

    aput v3, v0, v6

    sget-object v3, Landroidx/appcompat/widget/d0;->f:[I

    aput-object v3, v1, v5

    sget v3, La/a;->m:I

    invoke-static {p1, v3}, Landroidx/appcompat/widget/d0;->b(Landroid/content/Context;I)I

    move-result v3

    aput v3, v0, v5

    sget-object v3, Landroidx/appcompat/widget/d0;->i:[I

    aput-object v3, v1, v4

    invoke-static {p1, v2}, Landroidx/appcompat/widget/d0;->b(Landroid/content/Context;I)I

    move-result p1

    aput p1, v0, v4

    :goto_0
    new-instance p1, Landroid/content/res/ColorStateList;

    invoke-direct {p1, v1, v0}, Landroid/content/res/ColorStateList;-><init>([[I[I)V

    return-object p1
.end method

.method private static l(Landroid/content/res/ColorStateList;Landroid/graphics/PorterDuff$Mode;[I)Landroid/graphics/PorterDuffColorFilter;
    .locals 1

    if-eqz p0, :cond_1

    if-nez p1, :cond_0

    goto :goto_0

    :cond_0
    const/4 v0, 0x0

    invoke-virtual {p0, p2, v0}, Landroid/content/res/ColorStateList;->getColorForState([II)I

    move-result p0

    invoke-static {p0, p1}, Landroidx/appcompat/widget/f;->q(ILandroid/graphics/PorterDuff$Mode;)Landroid/graphics/PorterDuffColorFilter;

    move-result-object p0

    return-object p0

    :cond_1
    :goto_0
    const/4 p0, 0x0

    return-object p0
.end method

.method public static declared-synchronized m()Landroidx/appcompat/widget/f;
    .locals 2

    const-class v0, Landroidx/appcompat/widget/f;

    monitor-enter v0

    :try_start_0
    sget-object v1, Landroidx/appcompat/widget/f;->h:Landroidx/appcompat/widget/f;

    if-nez v1, :cond_0

    new-instance v1, Landroidx/appcompat/widget/f;

    invoke-direct {v1}, Landroidx/appcompat/widget/f;-><init>()V

    sput-object v1, Landroidx/appcompat/widget/f;->h:Landroidx/appcompat/widget/f;

    invoke-static {v1}, Landroidx/appcompat/widget/f;->u(Landroidx/appcompat/widget/f;)V

    :cond_0
    sget-object v1, Landroidx/appcompat/widget/f;->h:Landroidx/appcompat/widget/f;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    monitor-exit v0

    return-object v1

    :catchall_0
    move-exception v1

    monitor-exit v0

    throw v1
.end method

.method private declared-synchronized n(Landroid/content/Context;J)Landroid/graphics/drawable/Drawable;
    .locals 3

    monitor-enter p0

    :try_start_0
    iget-object v0, p0, Landroidx/appcompat/widget/f;->d:Ljava/util/WeakHashMap;

    invoke-virtual {v0, p1}, Ljava/util/WeakHashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Lg/c;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    const/4 v1, 0x0

    if-nez v0, :cond_0

    monitor-exit p0

    return-object v1

    :cond_0
    :try_start_1
    invoke-virtual {v0, p2, p3}, Lg/c;->d(J)Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Ljava/lang/ref/WeakReference;

    if-eqz v2, :cond_2

    invoke-virtual {v2}, Ljava/lang/ref/WeakReference;->get()Ljava/lang/Object;

    move-result-object v2

    check-cast v2, Landroid/graphics/drawable/Drawable$ConstantState;

    if-eqz v2, :cond_1

    invoke-virtual {p1}, Landroid/content/Context;->getResources()Landroid/content/res/Resources;

    move-result-object p1

    invoke-virtual {v2, p1}, Landroid/graphics/drawable/Drawable$ConstantState;->newDrawable(Landroid/content/res/Resources;)Landroid/graphics/drawable/Drawable;

    move-result-object p1
    :try_end_1
    .catchall {:try_start_1 .. :try_end_1} :catchall_0

    monitor-exit p0

    return-object p1

    :cond_1
    :try_start_2
    invoke-virtual {v0, p2, p3}, Lg/c;->b(J)V
    :try_end_2
    .catchall {:try_start_2 .. :try_end_2} :catchall_0

    :cond_2
    monitor-exit p0

    return-object v1

    :catchall_0
    move-exception p1

    monitor-exit p0

    throw p1
.end method

.method public static declared-synchronized q(ILandroid/graphics/PorterDuff$Mode;)Landroid/graphics/PorterDuffColorFilter;
    .locals 3

    const-class v0, Landroidx/appcompat/widget/f;

    monitor-enter v0

    :try_start_0
    sget-object v1, Landroidx/appcompat/widget/f;->i:Landroidx/appcompat/widget/f$a;

    invoke-virtual {v1, p0, p1}, Landroidx/appcompat/widget/f$a;->i(ILandroid/graphics/PorterDuff$Mode;)Landroid/graphics/PorterDuffColorFilter;

    move-result-object v2

    if-nez v2, :cond_0

    new-instance v2, Landroid/graphics/PorterDuffColorFilter;

    invoke-direct {v2, p0, p1}, Landroid/graphics/PorterDuffColorFilter;-><init>(ILandroid/graphics/PorterDuff$Mode;)V

    invoke-virtual {v1, p0, p1, v2}, Landroidx/appcompat/widget/f$a;->j(ILandroid/graphics/PorterDuff$Mode;Landroid/graphics/PorterDuffColorFilter;)Landroid/graphics/PorterDuffColorFilter;
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    :cond_0
    monitor-exit v0

    return-object v2

    :catchall_0
    move-exception p0

    monitor-exit v0

    throw p0
.end method

.method private s(Landroid/content/Context;I)Landroid/content/res/ColorStateList;
    .locals 2

    iget-object v0, p0, Landroidx/appcompat/widget/f;->a:Ljava/util/WeakHashMap;

    const/4 v1, 0x0

    if-eqz v0, :cond_0

    invoke-virtual {v0, p1}, Ljava/util/WeakHashMap;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object p1

    check-cast p1, Lg/g;

    if-eqz p1, :cond_0

    invoke-virtual {p1, p2}, Lg/g;->d(I)Ljava/lang/Object;

    move-result-object p1

    move-object v1, p1

    check-cast v1, Landroid/content/res/ColorStateList;

    :cond_0
    return-object v1
.end method

.method static t(I)Landroid/graphics/PorterDuff$Mode;
    .locals 1

    sget v0, La/e;->D:I

    if-ne p0, v0, :cond_0

    sget-object p0, Landroid/graphics/PorterDuff$Mode;->MULTIPLY:Landroid/graphics/PorterDuff$Mode;

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    :goto_0
    return-object p0
.end method

.method private static u(Landroidx/appcompat/widget/f;)V
    .locals 0

    return-void
.end method

.method private static v(Landroid/graphics/drawable/Drawable;)Z
    .locals 1

    instance-of v0, p0, Lu/b;

    if-nez v0, :cond_1

    const-string v0, "android.graphics.drawable.VectorDrawable"

    invoke-virtual {p0}, Ljava/lang/Object;->getClass()Ljava/lang/Class;

    move-result-object p0

    invoke-virtual {p0}, Ljava/lang/Class;->getName()Ljava/lang/String;

    move-result-object p0

    invoke-virtual {v0, p0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result p0

    if-eqz p0, :cond_0

    goto :goto_0

    :cond_0
    const/4 p0, 0x0

    goto :goto_1

    :cond_1
    :goto_0
    const/4 p0, 0x1

    :goto_1
    return p0
.end method

.method private w(Landroid/content/Context;I)Landroid/graphics/drawable/Drawable;
    .locals 10

    iget-object v0, p0, Landroidx/appcompat/widget/f;->b:Lg/a;

    const/4 v1, 0x0

    if-eqz v0, :cond_a

    invoke-virtual {v0}, Lg/f;->isEmpty()Z

    move-result v0

    if-nez v0, :cond_a

    iget-object v0, p0, Landroidx/appcompat/widget/f;->c:Lg/g;

    const-string v2, "appcompat_skip_skip"

    if-eqz v0, :cond_1

    invoke-virtual {v0, p2}, Lg/g;->d(I)Ljava/lang/Object;

    move-result-object v0

    check-cast v0, Ljava/lang/String;

    invoke-virtual {v2, v0}, Ljava/lang/String;->equals(Ljava/lang/Object;)Z

    move-result v3

    if-nez v3, :cond_0

    if-eqz v0, :cond_2

    iget-object v3, p0, Landroidx/appcompat/widget/f;->b:Lg/a;

    invoke-virtual {v3, v0}, Lg/f;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v0

    if-nez v0, :cond_2

    :cond_0
    return-object v1

    :cond_1
    new-instance v0, Lg/g;

    invoke-direct {v0}, Lg/g;-><init>()V

    iput-object v0, p0, Landroidx/appcompat/widget/f;->c:Lg/g;

    :cond_2
    iget-object v0, p0, Landroidx/appcompat/widget/f;->e:Landroid/util/TypedValue;

    if-nez v0, :cond_3

    new-instance v0, Landroid/util/TypedValue;

    invoke-direct {v0}, Landroid/util/TypedValue;-><init>()V

    iput-object v0, p0, Landroidx/appcompat/widget/f;->e:Landroid/util/TypedValue;

    :cond_3
    iget-object v0, p0, Landroidx/appcompat/widget/f;->e:Landroid/util/TypedValue;

    invoke-virtual {p1}, Landroid/content/Context;->getResources()Landroid/content/res/Resources;

    move-result-object v1

    const/4 v3, 0x1

    invoke-virtual {v1, p2, v0, v3}, Landroid/content/res/Resources;->getValue(ILandroid/util/TypedValue;Z)V

    invoke-static {v0}, Landroidx/appcompat/widget/f;->g(Landroid/util/TypedValue;)J

    move-result-wide v4

    invoke-direct {p0, p1, v4, v5}, Landroidx/appcompat/widget/f;->n(Landroid/content/Context;J)Landroid/graphics/drawable/Drawable;

    move-result-object v6

    if-eqz v6, :cond_4

    return-object v6

    :cond_4
    iget-object v7, v0, Landroid/util/TypedValue;->string:Ljava/lang/CharSequence;

    if-eqz v7, :cond_8

    invoke-interface {v7}, Ljava/lang/CharSequence;->toString()Ljava/lang/String;

    move-result-object v7

    const-string v8, ".xml"

    invoke-virtual {v7, v8}, Ljava/lang/String;->endsWith(Ljava/lang/String;)Z

    move-result v7

    if-eqz v7, :cond_8

    :try_start_0
    invoke-virtual {v1, p2}, Landroid/content/res/Resources;->getXml(I)Landroid/content/res/XmlResourceParser;

    move-result-object v1

    invoke-static {v1}, Landroid/util/Xml;->asAttributeSet(Lorg/xmlpull/v1/XmlPullParser;)Landroid/util/AttributeSet;

    move-result-object v7

    :goto_0
    invoke-interface {v1}, Lorg/xmlpull/v1/XmlPullParser;->next()I

    move-result v8

    const/4 v9, 0x2

    if-eq v8, v9, :cond_5

    if-eq v8, v3, :cond_5

    goto :goto_0

    :cond_5
    if-ne v8, v9, :cond_7

    invoke-interface {v1}, Lorg/xmlpull/v1/XmlPullParser;->getName()Ljava/lang/String;

    move-result-object v3

    iget-object v8, p0, Landroidx/appcompat/widget/f;->c:Lg/g;

    invoke-virtual {v8, p2, v3}, Lg/g;->a(ILjava/lang/Object;)V

    iget-object v8, p0, Landroidx/appcompat/widget/f;->b:Lg/a;

    invoke-virtual {v8, v3}, Lg/f;->get(Ljava/lang/Object;)Ljava/lang/Object;

    move-result-object v3

    check-cast v3, Landroidx/appcompat/widget/f$b;

    if-eqz v3, :cond_6

    invoke-virtual {p1}, Landroid/content/Context;->getTheme()Landroid/content/res/Resources$Theme;

    move-result-object v8

    invoke-interface {v3, p1, v1, v7, v8}, Landroidx/appcompat/widget/f$b;->a(Landroid/content/Context;Lorg/xmlpull/v1/XmlPullParser;Landroid/util/AttributeSet;Landroid/content/res/Resources$Theme;)Landroid/graphics/drawable/Drawable;

    move-result-object v1

    move-object v6, v1

    :cond_6
    if-eqz v6, :cond_8

    iget v0, v0, Landroid/util/TypedValue;->changingConfigurations:I

    invoke-virtual {v6, v0}, Landroid/graphics/drawable/Drawable;->setChangingConfigurations(I)V

    invoke-direct {p0, p1, v4, v5, v6}, Landroidx/appcompat/widget/f;->a(Landroid/content/Context;JLandroid/graphics/drawable/Drawable;)Z

    goto :goto_1

    :cond_7
    new-instance p1, Lorg/xmlpull/v1/XmlPullParserException;

    const-string v0, "No start tag found"

    invoke-direct {p1, v0}, Lorg/xmlpull/v1/XmlPullParserException;-><init>(Ljava/lang/String;)V

    throw p1
    :try_end_0
    .catch Ljava/lang/Exception; {:try_start_0 .. :try_end_0} :catch_0

    :catch_0
    move-exception p1

    const-string v0, "AppCompatDrawableManag"

    const-string v1, "Exception while inflating drawable"

    invoke-static {v0, v1, p1}, Landroid/util/Log;->e(Ljava/lang/String;Ljava/lang/String;Ljava/lang/Throwable;)I

    :cond_8
    :goto_1
    if-nez v6, :cond_9

    iget-object p1, p0, Landroidx/appcompat/widget/f;->c:Lg/g;

    invoke-virtual {p1, p2, v2}, Lg/g;->a(ILjava/lang/Object;)V

    :cond_9
    return-object v6

    :cond_a
    return-object v1
.end method

.method private static y(Landroid/graphics/drawable/Drawable;ILandroid/graphics/PorterDuff$Mode;)V
    .locals 1

    invoke-static {p0}, Landroidx/appcompat/widget/r;->a(Landroid/graphics/drawable/Drawable;)Z

    move-result v0

    if-eqz v0, :cond_0

    invoke-virtual {p0}, Landroid/graphics/drawable/Drawable;->mutate()Landroid/graphics/drawable/Drawable;

    move-result-object p0

    :cond_0
    if-nez p2, :cond_1

    sget-object p2, Landroidx/appcompat/widget/f;->g:Landroid/graphics/PorterDuff$Mode;

    :cond_1
    invoke-static {p1, p2}, Landroidx/appcompat/widget/f;->q(ILandroid/graphics/PorterDuff$Mode;)Landroid/graphics/PorterDuffColorFilter;

    move-result-object p1

    invoke-virtual {p0, p1}, Landroid/graphics/drawable/Drawable;->setColorFilter(Landroid/graphics/ColorFilter;)V

    return-void
.end method

.method private z(Landroid/content/Context;IZLandroid/graphics/drawable/Drawable;)Landroid/graphics/drawable/Drawable;
    .locals 5

    invoke-virtual {p0, p1, p2}, Landroidx/appcompat/widget/f;->r(Landroid/content/Context;I)Landroid/content/res/ColorStateList;

    move-result-object v0

    if-eqz v0, :cond_1

    invoke-static {p4}, Landroidx/appcompat/widget/r;->a(Landroid/graphics/drawable/Drawable;)Z

    move-result p1

    if-eqz p1, :cond_0

    invoke-virtual {p4}, Landroid/graphics/drawable/Drawable;->mutate()Landroid/graphics/drawable/Drawable;

    move-result-object p4

    :cond_0
    invoke-static {p4}, Ll/a;->i(Landroid/graphics/drawable/Drawable;)Landroid/graphics/drawable/Drawable;

    move-result-object p4

    invoke-static {p4, v0}, Ll/a;->g(Landroid/graphics/drawable/Drawable;Landroid/content/res/ColorStateList;)V

    invoke-static {p2}, Landroidx/appcompat/widget/f;->t(I)Landroid/graphics/PorterDuff$Mode;

    move-result-object p1

    if-eqz p1, :cond_5

    invoke-static {p4, p1}, Ll/a;->h(Landroid/graphics/drawable/Drawable;Landroid/graphics/PorterDuff$Mode;)V

    goto/16 :goto_1

    :cond_1
    sget v0, La/e;->A:I

    const v1, 0x102000d

    const v2, 0x102000f

    const/high16 v3, 0x1020000

    if-ne p2, v0, :cond_2

    move-object p2, p4

    check-cast p2, Landroid/graphics/drawable/LayerDrawable;

    invoke-virtual {p2, v3}, Landroid/graphics/drawable/LayerDrawable;->findDrawableByLayerId(I)Landroid/graphics/drawable/Drawable;

    move-result-object p3

    sget v0, La/a;->o:I

    invoke-static {p1, v0}, Landroidx/appcompat/widget/d0;->b(Landroid/content/Context;I)I

    move-result v3

    sget-object v4, Landroidx/appcompat/widget/f;->g:Landroid/graphics/PorterDuff$Mode;

    invoke-static {p3, v3, v4}, Landroidx/appcompat/widget/f;->y(Landroid/graphics/drawable/Drawable;ILandroid/graphics/PorterDuff$Mode;)V

    invoke-virtual {p2, v2}, Landroid/graphics/drawable/LayerDrawable;->findDrawableByLayerId(I)Landroid/graphics/drawable/Drawable;

    move-result-object p3

    invoke-static {p1, v0}, Landroidx/appcompat/widget/d0;->b(Landroid/content/Context;I)I

    move-result v0

    invoke-static {p3, v0, v4}, Landroidx/appcompat/widget/f;->y(Landroid/graphics/drawable/Drawable;ILandroid/graphics/PorterDuff$Mode;)V

    invoke-virtual {p2, v1}, Landroid/graphics/drawable/LayerDrawable;->findDrawableByLayerId(I)Landroid/graphics/drawable/Drawable;

    move-result-object p2

    sget p3, La/a;->m:I

    invoke-static {p1, p3}, Landroidx/appcompat/widget/d0;->b(Landroid/content/Context;I)I

    move-result p1

    invoke-static {p2, p1, v4}, Landroidx/appcompat/widget/f;->y(Landroid/graphics/drawable/Drawable;ILandroid/graphics/PorterDuff$Mode;)V

    goto :goto_1

    :cond_2
    sget v0, La/e;->w:I

    if-eq p2, v0, :cond_4

    sget v0, La/e;->v:I

    if-eq p2, v0, :cond_4

    sget v0, La/e;->x:I

    if-ne p2, v0, :cond_3

    goto :goto_0

    :cond_3
    invoke-static {p1, p2, p4}, Landroidx/appcompat/widget/f;->B(Landroid/content/Context;ILandroid/graphics/drawable/Drawable;)Z

    move-result p1

    if-nez p1, :cond_5

    if-eqz p3, :cond_5

    const/4 p4, 0x0

    goto :goto_1

    :cond_4
    :goto_0
    move-object p2, p4

    check-cast p2, Landroid/graphics/drawable/LayerDrawable;

    invoke-virtual {p2, v3}, Landroid/graphics/drawable/LayerDrawable;->findDrawableByLayerId(I)Landroid/graphics/drawable/Drawable;

    move-result-object p3

    sget v0, La/a;->o:I

    invoke-static {p1, v0}, Landroidx/appcompat/widget/d0;->a(Landroid/content/Context;I)I

    move-result v0

    sget-object v3, Landroidx/appcompat/widget/f;->g:Landroid/graphics/PorterDuff$Mode;

    invoke-static {p3, v0, v3}, Landroidx/appcompat/widget/f;->y(Landroid/graphics/drawable/Drawable;ILandroid/graphics/PorterDuff$Mode;)V

    invoke-virtual {p2, v2}, Landroid/graphics/drawable/LayerDrawable;->findDrawableByLayerId(I)Landroid/graphics/drawable/Drawable;

    move-result-object p3

    sget v0, La/a;->m:I

    invoke-static {p1, v0}, Landroidx/appcompat/widget/d0;->b(Landroid/content/Context;I)I

    move-result v2

    invoke-static {p3, v2, v3}, Landroidx/appcompat/widget/f;->y(Landroid/graphics/drawable/Drawable;ILandroid/graphics/PorterDuff$Mode;)V

    invoke-virtual {p2, v1}, Landroid/graphics/drawable/LayerDrawable;->findDrawableByLayerId(I)Landroid/graphics/drawable/Drawable;

    move-result-object p2

    invoke-static {p1, v0}, Landroidx/appcompat/widget/d0;->b(Landroid/content/Context;I)I

    move-result p1

    invoke-static {p2, p1, v3}, Landroidx/appcompat/widget/f;->y(Landroid/graphics/drawable/Drawable;ILandroid/graphics/PorterDuff$Mode;)V

    :cond_5
    :goto_1
    return-object p4
.end method


# virtual methods
.method public declared-synchronized o(Landroid/content/Context;I)Landroid/graphics/drawable/Drawable;
    .locals 1

    monitor-enter p0

    const/4 v0, 0x0

    :try_start_0
    invoke-virtual {p0, p1, p2, v0}, Landroidx/appcompat/widget/f;->p(Landroid/content/Context;IZ)Landroid/graphics/drawable/Drawable;

    move-result-object p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    monitor-exit p0

    return-object p1

    :catchall_0
    move-exception p1

    monitor-exit p0

    throw p1
.end method

.method declared-synchronized p(Landroid/content/Context;IZ)Landroid/graphics/drawable/Drawable;
    .locals 1

    monitor-enter p0

    :try_start_0
    invoke-direct {p0, p1}, Landroidx/appcompat/widget/f;->d(Landroid/content/Context;)V

    invoke-direct {p0, p1, p2}, Landroidx/appcompat/widget/f;->w(Landroid/content/Context;I)Landroid/graphics/drawable/Drawable;

    move-result-object v0

    if-nez v0, :cond_0

    invoke-direct {p0, p1, p2}, Landroidx/appcompat/widget/f;->j(Landroid/content/Context;I)Landroid/graphics/drawable/Drawable;

    move-result-object v0

    :cond_0
    if-nez v0, :cond_1

    invoke-static {p1, p2}, Li/a;->a(Landroid/content/Context;I)Landroid/graphics/drawable/Drawable;

    move-result-object v0

    :cond_1
    if-eqz v0, :cond_2

    invoke-direct {p0, p1, p2, p3, v0}, Landroidx/appcompat/widget/f;->z(Landroid/content/Context;IZLandroid/graphics/drawable/Drawable;)Landroid/graphics/drawable/Drawable;

    move-result-object v0

    :cond_2
    if-eqz v0, :cond_3

    invoke-static {v0}, Landroidx/appcompat/widget/r;->b(Landroid/graphics/drawable/Drawable;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    :cond_3
    monitor-exit p0

    return-object v0

    :catchall_0
    move-exception p1

    monitor-exit p0

    throw p1
.end method

.method declared-synchronized r(Landroid/content/Context;I)Landroid/content/res/ColorStateList;
    .locals 2

    monitor-enter p0

    :try_start_0
    invoke-direct {p0, p1, p2}, Landroidx/appcompat/widget/f;->s(Landroid/content/Context;I)Landroid/content/res/ColorStateList;

    move-result-object v0

    if-nez v0, :cond_c

    sget v1, La/e;->k:I

    if-ne p2, v1, :cond_0

    sget v0, La/c;->c:I

    :goto_0
    invoke-static {p1, v0}, Lc/a;->a(Landroid/content/Context;I)Landroid/content/res/ColorStateList;

    move-result-object v0

    goto/16 :goto_2

    :cond_0
    sget v1, La/e;->E:I

    if-ne p2, v1, :cond_1

    sget v0, La/c;->f:I

    goto :goto_0

    :cond_1
    sget v1, La/e;->D:I

    if-ne p2, v1, :cond_2

    invoke-direct {p0, p1}, Landroidx/appcompat/widget/f;->k(Landroid/content/Context;)Landroid/content/res/ColorStateList;

    move-result-object v0

    goto :goto_2

    :cond_2
    sget v1, La/e;->e:I

    if-ne p2, v1, :cond_3

    invoke-direct {p0, p1}, Landroidx/appcompat/widget/f;->i(Landroid/content/Context;)Landroid/content/res/ColorStateList;

    move-result-object v0

    goto :goto_2

    :cond_3
    sget v1, La/e;->b:I

    if-ne p2, v1, :cond_4

    invoke-direct {p0, p1}, Landroidx/appcompat/widget/f;->e(Landroid/content/Context;)Landroid/content/res/ColorStateList;

    move-result-object v0

    goto :goto_2

    :cond_4
    sget v1, La/e;->d:I

    if-ne p2, v1, :cond_5

    invoke-direct {p0, p1}, Landroidx/appcompat/widget/f;->h(Landroid/content/Context;)Landroid/content/res/ColorStateList;

    move-result-object v0

    goto :goto_2

    :cond_5
    sget v1, La/e;->B:I

    if-eq p2, v1, :cond_a

    sget v1, La/e;->C:I

    if-ne p2, v1, :cond_6

    goto :goto_1

    :cond_6
    sget-object v1, Landroidx/appcompat/widget/f;->k:[I

    invoke-static {v1, p2}, Landroidx/appcompat/widget/f;->c([II)Z

    move-result v1

    if-eqz v1, :cond_7

    sget v0, La/a;->o:I

    invoke-static {p1, v0}, Landroidx/appcompat/widget/d0;->d(Landroid/content/Context;I)Landroid/content/res/ColorStateList;

    move-result-object v0

    goto :goto_2

    :cond_7
    sget-object v1, Landroidx/appcompat/widget/f;->n:[I

    invoke-static {v1, p2}, Landroidx/appcompat/widget/f;->c([II)Z

    move-result v1

    if-eqz v1, :cond_8

    sget v0, La/c;->b:I

    goto :goto_0

    :cond_8
    sget-object v1, Landroidx/appcompat/widget/f;->o:[I

    invoke-static {v1, p2}, Landroidx/appcompat/widget/f;->c([II)Z

    move-result v1

    if-eqz v1, :cond_9

    sget v0, La/c;->a:I

    goto :goto_0

    :cond_9
    sget v1, La/e;->y:I

    if-ne p2, v1, :cond_b

    sget v0, La/c;->d:I

    goto :goto_0

    :cond_a
    :goto_1
    sget v0, La/c;->e:I

    goto :goto_0

    :cond_b
    :goto_2
    if-eqz v0, :cond_c

    invoke-direct {p0, p1, p2, v0}, Landroidx/appcompat/widget/f;->b(Landroid/content/Context;ILandroid/content/res/ColorStateList;)V
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    :cond_c
    monitor-exit p0

    return-object v0

    :catchall_0
    move-exception p1

    monitor-exit p0

    throw p1
.end method

.method declared-synchronized x(Landroid/content/Context;Landroidx/appcompat/widget/n0;I)Landroid/graphics/drawable/Drawable;
    .locals 1

    monitor-enter p0

    :try_start_0
    invoke-direct {p0, p1, p3}, Landroidx/appcompat/widget/f;->w(Landroid/content/Context;I)Landroid/graphics/drawable/Drawable;

    move-result-object v0

    if-nez v0, :cond_0

    invoke-virtual {p2, p3}, Landroidx/appcompat/widget/n0;->c(I)Landroid/graphics/drawable/Drawable;

    move-result-object v0

    :cond_0
    if-eqz v0, :cond_1

    const/4 p2, 0x0

    invoke-direct {p0, p1, p3, p2, v0}, Landroidx/appcompat/widget/f;->z(Landroid/content/Context;IZLandroid/graphics/drawable/Drawable;)Landroid/graphics/drawable/Drawable;

    move-result-object p1
    :try_end_0
    .catchall {:try_start_0 .. :try_end_0} :catchall_0

    monitor-exit p0

    return-object p1

    :cond_1
    const/4 p1, 0x0

    monitor-exit p0

    return-object p1

    :catchall_0
    move-exception p1

    monitor-exit p0

    throw p1
.end method
