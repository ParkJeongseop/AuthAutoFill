.class Landroidx/appcompat/widget/c$f;
.super Ljava/lang/Object;
.source "SourceFile"

# interfaces
.implements Landroidx/appcompat/view/menu/h$a;


# annotations
.annotation system Ldalvik/annotation/EnclosingClass;
    value = Landroidx/appcompat/widget/c;
.end annotation

.annotation system Ldalvik/annotation/InnerClass;
    accessFlags = 0x2
    name = "f"
.end annotation


# instance fields
.field final synthetic a:Landroidx/appcompat/widget/c;


# direct methods
.method constructor <init>(Landroidx/appcompat/widget/c;)V
    .locals 0

    iput-object p1, p0, Landroidx/appcompat/widget/c$f;->a:Landroidx/appcompat/widget/c;

    invoke-direct {p0}, Ljava/lang/Object;-><init>()V

    return-void
.end method


# virtual methods
.method public a(Landroidx/appcompat/view/menu/d;Z)V
    .locals 2

    instance-of v0, p1, Landroidx/appcompat/view/menu/k;

    if-eqz v0, :cond_0

    invoke-virtual {p1}, Landroidx/appcompat/view/menu/d;->z()Landroidx/appcompat/view/menu/d;

    move-result-object v0

    const/4 v1, 0x0

    invoke-virtual {v0, v1}, Landroidx/appcompat/view/menu/d;->d(Z)V

    :cond_0
    iget-object v0, p0, Landroidx/appcompat/widget/c$f;->a:Landroidx/appcompat/widget/c;

    invoke-virtual {v0}, Landroidx/appcompat/view/menu/a;->m()Landroidx/appcompat/view/menu/h$a;

    move-result-object v0

    if-eqz v0, :cond_1

    invoke-interface {v0, p1, p2}, Landroidx/appcompat/view/menu/h$a;->a(Landroidx/appcompat/view/menu/d;Z)V

    :cond_1
    return-void
.end method

.method public b(Landroidx/appcompat/view/menu/d;)Z
    .locals 3

    const/4 v0, 0x0

    if-nez p1, :cond_0

    return v0

    :cond_0
    iget-object v1, p0, Landroidx/appcompat/widget/c$f;->a:Landroidx/appcompat/widget/c;

    move-object v2, p1

    check-cast v2, Landroidx/appcompat/view/menu/k;

    invoke-virtual {v2}, Landroidx/appcompat/view/menu/k;->getItem()Landroid/view/MenuItem;

    move-result-object v2

    invoke-interface {v2}, Landroid/view/MenuItem;->getItemId()I

    move-result v2

    iput v2, v1, Landroidx/appcompat/widget/c;->E:I

    iget-object v1, p0, Landroidx/appcompat/widget/c$f;->a:Landroidx/appcompat/widget/c;

    invoke-virtual {v1}, Landroidx/appcompat/view/menu/a;->m()Landroidx/appcompat/view/menu/h$a;

    move-result-object v1

    if-eqz v1, :cond_1

    invoke-interface {v1, p1}, Landroidx/appcompat/view/menu/h$a;->b(Landroidx/appcompat/view/menu/d;)Z

    move-result v0

    :cond_1
    return v0
.end method
